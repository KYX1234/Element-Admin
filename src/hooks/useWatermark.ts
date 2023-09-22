import { useThrottleFn } from '@vueuse/core';

import { shallowRef, ref, Ref, unref } from 'vue';

interface IAttr {
  /** 字体，默认 `18px Vedana` */
  font?: string;
  /** 填充绘制图形的颜色 */
  fillStyle?: string;
  /** 水印旋转，默认 `-20` */
  rotate?: number;
  /** 水印无法删除，默认 `false` */
  forever: boolean;
}

export function useWatermark(appendEl: Ref<HTMLElement | null> = ref(document.body)) {
  let style = '';
  let attr: IAttr | undefined = undefined;
  let observer: MutationObserver | null = null;
  const id = Symbol('watermark').toString();
  const watermarkEl = shallowRef<HTMLElement | null>(null);

  // 绘制文字背景图
  function createBase64(text: string, attr?: IAttr) {
    const can = document.createElement('canvas');
    can.width = 200;
    can.height = 120;

    const cans = can.getContext('2d');
    if (cans) {
      cans.rotate(((attr?.rotate ?? -20) * Math.PI) / 120);
      cans.font = attr?.font ?? '18px Vedana';
      cans.fillStyle = attr?.fillStyle ?? 'rgba(0, 0, 0, 0.12)';
      cans.textAlign = 'left';
      cans.textBaseline = 'middle';
      cans.fillText(text, can.width / 20, can.height);
    }
    return can.toDataURL('image/png');
  }

  // 绘制水印层
  const createWatermark = (text: string, attr?: IAttr) => {
    if (unref(watermarkEl)) {
      updateWatermark({ text, attr });
      return id;
    }
    const div = document.createElement('div');
    watermarkEl.value = div;
    div.id = id;
    div.style.pointerEvents = 'none';
    div.style.top = '0px';
    div.style.left = '0px';
    div.style.position = 'absolute';
    div.style.zIndex = '100000';
    const el = unref(appendEl);
    if (!el) return id;
    el.style.position = 'relative';
    const { clientHeight: height, clientWidth: width } = el;
    updateWatermark({ text, width, height, attr });
    el.appendChild(div);
    return id;
  };

  // 页面随窗口调整更新水印
  function updateWatermark(
    options: {
      width?: number;
      height?: number;
      text?: string;
      attr?: IAttr;
    } = {}
  ) {
    const el = unref(watermarkEl);
    if (!el) return;
    if (options.width) {
      el.style.width = `${options.width}px`;
    }
    if (options.height) {
      el.style.height = `${options.height}px`;
    }
    if (options.text) {
      el.style.background = `url(${createBase64(options.text, options.attr)}) left top repeat`;
    }
    style = el.style.cssText;
  }

  // 对外提供的设置水印方法
  function setWatermark(text: string, attrProps?: IAttr) {
    if (attrProps) attr = attrProps;
    createWatermark(text, attr);
    attr?.forever && createObserver(text, attr);
    window.addEventListener('resize', func);
  }

  const func = useThrottleFn(function () {
    const el = unref(appendEl);
    if (!el) return;
    const { clientHeight: height, clientWidth: width } = el;
    updateWatermark({ height, width });
  }, 30);

  // 清除水印
  const clear = () => {
    const domId = unref(watermarkEl);
    watermarkEl.value = null;
    observer?.disconnect();
    observer ??= null;
    const el = unref(appendEl);
    if (!el) return;
    domId && el.removeChild(domId);
    window.removeEventListener('resize', func);
  };

  // 监听 DOM 变化
  const createObserver = (text: string, attr?: IAttr) => {
    const domId = unref(watermarkEl);
    if (!domId) return;
    observer = new MutationObserver((mutationsList) => {
      if (mutationsList.length) {
        const { removedNodes, type, target } = mutationsList[0];
        const currStyle = domId.getAttribute('style');
        if (removedNodes[0] === domId) {
          watermarkEl.value = null;
          observer!.disconnect();
          createWatermark(text, attr);
        } else if (type === 'attributes' && target === domId && currStyle !== style) {
          domId.setAttribute('style', style);
        }
      }
    });
    observer.observe(unref(appendEl)!, {
      childList: true,
      attributes: true,
      subtree: true
    });
  };

  return { setWatermark, clear };
}
