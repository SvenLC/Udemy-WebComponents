/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface UcSideDrawer {
    'open': () => Promise<void>;
    'opened': boolean;
    'title': string;
  }
  interface UcStockPrice {}
}

declare global {


  interface HTMLUcSideDrawerElement extends Components.UcSideDrawer, HTMLStencilElement {}
  var HTMLUcSideDrawerElement: {
    prototype: HTMLUcSideDrawerElement;
    new (): HTMLUcSideDrawerElement;
  };

  interface HTMLUcStockPriceElement extends Components.UcStockPrice, HTMLStencilElement {}
  var HTMLUcStockPriceElement: {
    prototype: HTMLUcStockPriceElement;
    new (): HTMLUcStockPriceElement;
  };
  interface HTMLElementTagNameMap {
    'uc-side-drawer': HTMLUcSideDrawerElement;
    'uc-stock-price': HTMLUcStockPriceElement;
  }
}

declare namespace LocalJSX {
  interface UcSideDrawer {
    'opened'?: boolean;
    'title'?: string;
  }
  interface UcStockPrice {}

  interface IntrinsicElements {
    'uc-side-drawer': UcSideDrawer;
    'uc-stock-price': UcStockPrice;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'uc-side-drawer': LocalJSX.UcSideDrawer & JSXBase.HTMLAttributes<HTMLUcSideDrawerElement>;
      'uc-stock-price': LocalJSX.UcStockPrice & JSXBase.HTMLAttributes<HTMLUcStockPriceElement>;
    }
  }
}


