(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-view-product-view-module"],{

/***/ "./node_modules/ngx-pinch-zoom/__ivy_ngcc__/fesm2015/ngx-pinch-zoom.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-pinch-zoom/__ivy_ngcc__/fesm2015/ngx-pinch-zoom.js ***!
  \*****************************************************************************/
/*! exports provided: PinchZoomModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinchZoomModule", function() { return PinchZoomModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return PinchZoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */



function PinchZoomComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PinchZoomComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.toggleZoom(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pz-zoom-button-out", ctx_r0.isZoomedIn);
} }
const _c0 = ["*"];
function Properties() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/properties.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultProperties = {
    transitionDuration: 200,
    doubleTap: true,
    doubleTapScale: 2,
    limitZoom: "original image size",
    autoZoomOut: false,
    disabled: false,
    overflow: "hidden",
    zoomControlScale: 1,
    backgroundColor: "rgba(0,0,0,0.85)",
    minScale: 0,
    minPanScale: 1.0001,
    disableZoomControl: "auto",
    listeners: "mouse and touch",
    wheel: true,
    wheelZoomFactor: 0.2,
    draggableImage: false
};
/** @type {?} */
const backwardCompatibilityProperties = {
    "transition-duration": "transitionDuration",
    "double-tap": "doubleTap",
    "double-tap-scale": "doubleTapScale",
    "zoom-button": "zoomButton",
    "auto-zoom-out": "autoZoomOut",
    "limit-zoom": "limitZoom"
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/touches.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Properties$1() { }
if (false) {}
class Touches {
    /**
     * @param {?} properties
     */
    constructor(properties) {
        this.eventType = undefined;
        this.handlers = {};
        this.startX = 0;
        this.startY = 0;
        this.lastTap = 0;
        this.doubleTapMinTimeout = 300;
        this.tapMinTimeout = 200;
        this.touchstartTime = 0;
        this.i = 0;
        this.isMousedown = false;
        this.touchListeners = {
            "touchstart": "handleTouchstart",
            "touchmove": "handleTouchmove",
            "touchend": "handleTouchend"
        };
        this.mouseListeners = {
            "mousedown": "handleMousedown",
            "mousemove": "handleMousemove",
            "mouseup": "handleMouseup",
            "wheel": "handleWheel"
        };
        this.otherListeners = {
            "resize": "handleResize"
        };
        /*
             * Listeners
             */
        /* Touchstart */
        this.handleTouchstart = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.elementPosition = this.getElementPosition();
            this.touchstartTime = new Date().getTime();
            if (this.eventType === undefined) {
                this.getTouchstartPosition(event);
            }
            this.runHandler("touchstart", event);
        });
        /* Touchmove */
        this.handleTouchmove = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const touches = event.touches;
            // Pan
            if (this.detectPan(touches)) {
                this.runHandler("pan", event);
            }
            // Pinch
            if (this.detectPinch(event)) {
                this.runHandler("pinch", event);
            }
        });
        /* Touchend */
        this.handleTouchend = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const touches = event.touches;
            // Double Tap
            if (this.detectDoubleTap()) {
                this.runHandler("double-tap", event);
            }
            // Tap
            this.detectTap();
            this.runHandler("touchend", event);
            this.eventType = 'touchend';
            if (touches && touches.length === 0) {
                this.eventType = undefined;
                this.i = 0;
            }
        });
        /* Mousedown */
        this.handleMousedown = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.isMousedown = true;
            this.elementPosition = this.getElementPosition();
            this.touchstartTime = new Date().getTime();
            if (this.eventType === undefined) {
                this.getMousedownPosition(event);
            }
            this.runHandler("mousedown", event);
        });
        /* Mousemove */
        this.handleMousemove = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            //event.preventDefault();
            if (!this.isMousedown) {
                return;
            }
            // Pan
            this.runHandler("pan", event);
            // Linear swipe
            switch (this.detectLinearSwipe(event)) {
                case "horizontal-swipe":
                    event.swipeType = "horizontal-swipe";
                    this.runHandler("horizontal-swipe", event);
                    break;
                case "vertical-swipe":
                    event.swipeType = "vertical-swipe";
                    this.runHandler("vertical-swipe", event);
                    break;
            }
            // Linear swipe
            if (this.detectLinearSwipe(event) ||
                this.eventType === 'horizontal-swipe' ||
                this.eventType === 'vertical-swipe') {
                this.handleLinearSwipe(event);
            }
        });
        /* Mouseup */
        this.handleMouseup = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            // Tap
            this.detectTap();
            this.isMousedown = false;
            this.runHandler("mouseup", event);
            this.eventType = undefined;
            this.i = 0;
        });
        /* Wheel */
        this.handleWheel = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.runHandler("wheel", event);
        });
        /* Resize */
        this.handleResize = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.runHandler("resize", event);
        });
        this.properties = properties;
        this.element = this.properties.element;
        this.elementPosition = this.getElementPosition();
        this.toggleEventListeners('addEventListener');
    }
    /**
     * @return {?}
     */
    destroy() {
        this.toggleEventListeners('removeEventListener');
    }
    /**
     * @param {?} action
     * @return {?}
     */
    toggleEventListeners(action) {
        /** @type {?} */
        let listeners;
        if (this.properties.listeners === 'mouse and touch') {
            listeners = Object.assign(this.touchListeners, this.mouseListeners);
        }
        else {
            listeners = this.detectTouchScreen() ? this.touchListeners : this.mouseListeners;
        }
        if (this.properties.resize) {
            listeners = Object.assign(listeners, this.otherListeners);
        }
        for (var listener in listeners) {
            /** @type {?} */
            const handler = listeners[listener];
            // Window
            if (listener === "resize") {
                if (action === 'addEventListener') {
                    window.addEventListener(listener, this[handler], false);
                }
                if (action === 'removeEventListener') {
                    window.removeEventListener(listener, this[handler], false);
                }
                // Document
            }
            else if (listener === 'mouseup' || listener === "mousemove") {
                if (action === 'addEventListener') {
                    document.addEventListener(listener, this[handler], false);
                }
                if (action === 'removeEventListener') {
                    document.removeEventListener(listener, this[handler], false);
                }
                // Element
            }
            else {
                if (action === 'addEventListener') {
                    this.element.addEventListener(listener, this[handler], false);
                }
                if (action === 'removeEventListener') {
                    this.element.removeEventListener(listener, this[handler], false);
                }
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleLinearSwipe(event) {
        //event.preventDefault();
        this.i++;
        if (this.i > 3) {
            this.eventType = this.getLinearSwipeType(event);
        }
        if (this.eventType === 'horizontal-swipe') {
            this.runHandler('horizontal-swipe', event);
        }
        if (this.eventType === 'vertical-swipe') {
            this.runHandler('vertical-swipe', event);
        }
    }
    /**
     * @param {?} eventName
     * @param {?} response
     * @return {?}
     */
    runHandler(eventName, response) {
        if (this.handlers[eventName]) {
            this.handlers[eventName](response);
        }
    }
    /*
         * Detection
         */
    /**
     * @param {?} touches
     * @return {?}
     */
    detectPan(touches) {
        return touches.length === 1 && !this.eventType || this.eventType === 'pan';
    }
    /**
     * @return {?}
     */
    detectDoubleTap() {
        if (this.eventType != undefined) {
            return;
        }
        /** @type {?} */
        const currentTime = new Date().getTime();
        /** @type {?} */
        const tapLength = currentTime - this.lastTap;
        clearTimeout(this.doubleTapTimeout);
        if (tapLength < this.doubleTapMinTimeout && tapLength > 0) {
            return true;
        }
        else {
            this.doubleTapTimeout = setTimeout((/**
             * @return {?}
             */
            () => {
                clearTimeout(this.doubleTapTimeout);
            }), this.doubleTapMinTimeout);
        }
        this.lastTap = currentTime;
    }
    /**
     * @return {?}
     */
    detectTap() {
        if (this.eventType != undefined) {
            return;
        }
        /** @type {?} */
        const currentTime = new Date().getTime();
        /** @type {?} */
        const tapLength = currentTime - this.touchstartTime;
        if (tapLength > 0) {
            if (tapLength < this.tapMinTimeout) {
                this.runHandler("tap", event);
            }
            else {
                this.runHandler("longtap", event);
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    detectPinch(event) {
        /** @type {?} */
        const touches = event.touches;
        return (touches.length === 2 && this.eventType === undefined) || this.eventType === 'pinch';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    detectLinearSwipe(event) {
        /** @type {?} */
        const touches = event.touches;
        if (touches) {
            if (touches.length === 1 && !this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
                return this.getLinearSwipeType(event);
            }
        }
        else {
            if (!this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
                return this.getLinearSwipeType(event);
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    getLinearSwipeType(event) {
        if (this.eventType !== 'horizontal-swipe' && this.eventType !== 'vertical-swipe') {
            /** @type {?} */
            const movementX = Math.abs(this.moveLeft(0, event) - this.startX);
            /** @type {?} */
            const movementY = Math.abs(this.moveTop(0, event) - this.startY);
            if ((movementY * 3) > movementX) {
                return 'vertical-swipe';
            }
            else {
                return 'horizontal-swipe';
            }
        }
        else {
            return this.eventType;
        }
    }
    /**
     * @return {?}
     */
    getElementPosition() {
        return this.element.getBoundingClientRect();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    getTouchstartPosition(event) {
        this.startX = event.touches[0].clientX - this.elementPosition.left;
        this.startY = event.touches[0].clientY - this.elementPosition.top;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    getMousedownPosition(event) {
        this.startX = event.clientX - this.elementPosition.left;
        this.startY = event.clientY - this.elementPosition.top;
    }
    /**
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    moveLeft(index, event) {
        /** @type {?} */
        const touches = event.touches;
        if (touches) {
            return touches[index].clientX - this.elementPosition.left;
        }
        else {
            return event.clientX - this.elementPosition.left;
        }
    }
    /**
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    moveTop(index, event) {
        /** @type {?} */
        const touches = event.touches;
        if (touches) {
            return touches[index].clientY - this.elementPosition.top;
        }
        else {
            return event.clientY - this.elementPosition.top;
        }
    }
    /**
     * @return {?}
     */
    detectTouchScreen() {
        /** @type {?} */
        var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
        /** @type {?} */
        var mq = (/**
         * @param {?} query
         * @return {?}
         */
        function (query) {
            return window.matchMedia(query).matches;
        });
        if (('ontouchstart' in window)) {
            return true;
        }
        // include the 'heartz' as a way to have a non matching MQ to help terminate the join
        // https://git.io/vznFH
        /** @type {?} */
        var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
        return mq(query);
    }
    /* Public properties and methods */
    /**
     * @param {?} event
     * @param {?} handler
     * @return {?}
     */
    on(event, handler) {
        if (event) {
            this.handlers[event] = handler;
        }
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ivypinch.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IvyPinchProperties() { }
if (false) {}
/** @type {?} */
const IvyPinchDefaultProperties = {
    doubleTap: true,
    doubleTapScale: 2,
    transitionDuration: 200,
    limitZoom: "original image size",
    minScale: 0,
    minPanScale: 1.0001,
    wheel: true,
    wheelZoomFactor: 0.2,
    draggableImage: true,
    listeners: 'auto',
    zoomControlScale: 2
};
class IvyPinch {
    /**
     * @param {?} properties
     */
    constructor(properties) {
        this.i = 0;
        this.scale = 1;
        this.initialScale = 1;
        this.startX = 0;
        this.startY = 0;
        this.moveX = 0;
        this.moveY = 0;
        this.initialMoveX = 0;
        this.initialMoveY = 0;
        this.moveXC = 0;
        this.moveYC = 0;
        this.lastTap = 0;
        this.draggingMode = false;
        this.distance = 0;
        this.doubleTapTimeout = 0;
        this.initialDistance = 0;
        this.events = {};
        this.maxHtmlContentScale = 3;
        this.maxScale = 3;
        /* Touchstart */
        this.handleTouchstart = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.getElementPosition();
            if (this.eventType === undefined) {
                this.getTouchstartPosition(event);
            }
        });
        /* Touchend */
        this.handleTouchend = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /* touchend */
            if (event.type === "touchend") {
                this.i = 0;
                this.draggingMode = false;
                /** @type {?} */
                const touches = event.touches;
                // Min scale
                if (this.scale < 1) {
                    this.scale = 1;
                }
                // Auto Zoom Out
                if (this.properties.autoZoomOut && this.eventType === 'pinch') {
                    this.scale = 1;
                }
                // Align image
                if (this.eventType === 'pinch' ||
                    this.eventType === 'pan' && this.scale > this.properties.minPanScale) {
                    this.alignImage();
                }
                // Update initial values
                if (this.eventType === 'pinch' ||
                    this.eventType === 'pan' ||
                    this.eventType === 'horizontal-swipe' ||
                    this.eventType === 'vertical-swipe') {
                    this.updateInitialValues();
                }
                this.eventType = 'touchend';
                if (touches && touches.length === 0) {
                    this.eventType = undefined;
                }
            }
            /* mouseup */
            if (event.type === "mouseup") {
                this.draggingMode = false;
                this.updateInitialValues();
                this.eventType = undefined;
            }
        });
        /*
             * Handlers
             */
        this.handlePan = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (this.scale < this.properties.minPanScale || this.properties.disablePan) {
                return;
            }
            event.preventDefault();
            const { clientX, clientY } = this.getClientPosition(event);
            if (!this.eventType) {
                this.startX = clientX - this.elementPosition.left;
                this.startY = clientY - this.elementPosition.top;
            }
            this.eventType = 'pan';
            this.moveX = this.initialMoveX + (this.moveLeft(event, 0) - this.startX);
            this.moveY = this.initialMoveY + (this.moveTop(event, 0) - this.startY);
            if (this.properties.limitPan) {
                this.limitPanY();
                this.limitPanX();
            }
            /* mousemove */
            if (event.type === "mousemove" && this.scale > this.properties.minPanScale) {
                this.centeringImage();
            }
            this.transformElement(0);
        });
        this.handleDoubleTap = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.toggleZoom(event);
            return;
        });
        this.handlePinch = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            event.preventDefault();
            if (this.eventType === undefined || this.eventType === 'pinch') {
                /** @type {?} */
                const touches = event.touches;
                if (!this.eventType) {
                    this.initialDistance = this.getDistance(touches);
                    /** @type {?} */
                    const moveLeft0 = this.moveLeft(event, 0);
                    /** @type {?} */
                    const moveLeft1 = this.moveLeft(event, 1);
                    /** @type {?} */
                    const moveTop0 = this.moveTop(event, 0);
                    /** @type {?} */
                    const moveTop1 = this.moveTop(event, 1);
                    this.moveXC = ((moveLeft0 + moveLeft1) / 2) - this.initialMoveX;
                    this.moveYC = ((moveTop0 + moveTop1) / 2) - this.initialMoveY;
                }
                this.eventType = 'pinch';
                this.distance = this.getDistance(touches);
                this.scale = this.initialScale * (this.distance / this.initialDistance);
                this.moveX = this.initialMoveX - (((this.distance / this.initialDistance) * this.moveXC) - this.moveXC);
                this.moveY = this.initialMoveY - (((this.distance / this.initialDistance) * this.moveYC) - this.moveYC);
                this.handleLimitZoom();
                if (this.properties.limitPan) {
                    this.limitPanY();
                    this.limitPanX();
                }
                this.transformElement(0);
            }
        });
        this.handleWheel = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            event.preventDefault();
            /** @type {?} */
            let wheelZoomFactor = this.properties.wheelZoomFactor || 0;
            /** @type {?} */
            let zoomFactor = event.deltaY < 0 ? (wheelZoomFactor) : (-wheelZoomFactor);
            /** @type {?} */
            let newScale = this.initialScale + zoomFactor;
            /* Round value */
            if (newScale < (1 + wheelZoomFactor)) {
                newScale = 1;
            }
            else if (newScale < this.maxScale && newScale > this.maxScale - wheelZoomFactor) {
                newScale = this.maxScale;
            }
            if (newScale < 1 || newScale > this.maxScale) {
                return;
            }
            if (newScale === this.scale) {
                return;
            }
            this.getElementPosition();
            this.scale = newScale;
            /* Get cursor position over image */
            /** @type {?} */
            let xCenter = (event.clientX - this.elementPosition.left) - this.initialMoveX;
            /** @type {?} */
            let yCenter = (event.clientY - this.elementPosition.top) - this.initialMoveY;
            this.setZoom({
                scale: newScale,
                center: [xCenter, yCenter]
            });
        });
        this.handleResize = (/**
         * @param {?} _event
         * @return {?}
         */
        (_event) => {
            this.setAutoHeight();
        });
        this.element = properties.element;
        this.elementTarget = this.element.querySelector('*').tagName;
        this.parentElement = this.element.parentElement;
        this.properties = Object.assign({}, IvyPinchDefaultProperties, properties);
        this.pollLimitZoom();
        this.touches = new Touches({
            element: properties.element,
            listeners: this.properties.listeners,
            resize: this.properties.autoHeight
        });
        /* Init */
        this.setBasicStyles();
        /*
         * Listeners
         */
        this.touches.on('touchstart', this.handleTouchstart);
        this.touches.on('touchend', this.handleTouchend);
        this.touches.on('mousedown', this.handleTouchstart);
        this.touches.on('mouseup', this.handleTouchend);
        this.touches.on('pan', this.handlePan);
        this.touches.on('mousemove', this.handlePan);
        this.touches.on('pinch', this.handlePinch);
        if (this.properties.wheel) {
            this.touches.on('wheel', this.handleWheel);
        }
        if (this.properties.doubleTap) {
            this.touches.on('double-tap', this.handleDoubleTap);
        }
        if (this.properties.autoHeight) {
            this.touches.on('resize', this.handleResize);
        }
    }
    /**
     * @return {?}
     */
    handleLimitZoom() {
        /** @type {?} */
        const limitZoom = this.maxScale;
        /** @type {?} */
        const minScale = this.properties.minScale || 0;
        if (this.scale > limitZoom || this.scale <= minScale) {
            /** @type {?} */
            const imageWidth = this.getImageWidth();
            /** @type {?} */
            const imageHeight = this.getImageHeight();
            /** @type {?} */
            const enlargedImageWidth = imageWidth * this.scale;
            /** @type {?} */
            const enlargedImageHeight = imageHeight * this.scale;
            /** @type {?} */
            const moveXRatio = this.moveX / (enlargedImageWidth - imageWidth);
            /** @type {?} */
            const moveYRatio = this.moveY / (enlargedImageHeight - imageHeight);
            if (this.scale > limitZoom) {
                this.scale = limitZoom;
            }
            if (this.scale <= minScale) {
                this.scale = minScale;
            }
            /** @type {?} */
            const newImageWidth = imageWidth * this.scale;
            /** @type {?} */
            const newImageHeight = imageHeight * this.scale;
            this.moveX = -Math.abs((moveXRatio * (newImageWidth - imageWidth)));
            this.moveY = -Math.abs((-moveYRatio * (newImageHeight - imageHeight)));
        }
    }
    /**
     * @return {?}
     */
    getLimitZoom() {
        if (this.properties.limitZoom === "original image size") {
            if (this.elementTarget === "IMG") {
                /** @type {?} */
                let img = this.element.getElementsByTagName("img")[0];
                if (img.naturalWidth && img.offsetWidth) {
                    this.maxScale = img.naturalWidth / img.offsetWidth;
                    return this.maxScale;
                }
            }
            else {
                this.maxScale = this.maxHtmlContentScale;
                return this.maxScale;
            }
        }
        else {
            this.maxScale = this.properties.limitZoom || 0;
            return this.maxScale;
        }
    }
    /**
     * @param {?} event
     * @param {?=} index
     * @return {?}
     */
    moveLeft(event, index = 0) {
        /** @type {?} */
        const clientX = this.getClientPosition(event, index).clientX;
        return clientX - this.elementPosition.left;
    }
    /**
     * @param {?} event
     * @param {?=} index
     * @return {?}
     */
    moveTop(event, index = 0) {
        /** @type {?} */
        const clientY = this.getClientPosition(event, index).clientY;
        return clientY - this.elementPosition.top;
    }
    /*
         * Detection
         */
    /**
     * @return {?}
     */
    centeringImage() {
        /** @type {?} */
        const img = this.element.getElementsByTagName(this.elementTarget)[0];
        /** @type {?} */
        const initialMoveX = this.moveX;
        /** @type {?} */
        const initialMoveY = this.moveY;
        if (this.moveY > 0) {
            this.moveY = 0;
        }
        if (this.moveX > 0) {
            this.moveX = 0;
        }
        if (img) {
            this.limitPanY();
            this.limitPanX();
        }
        if (img && this.scale < 1) {
            if (this.moveX < this.element.offsetWidth * (1 - this.scale)) {
                this.moveX = this.element.offsetWidth * (1 - this.scale);
            }
        }
        return initialMoveX !== this.moveX || initialMoveY !== this.moveY;
    }
    /**
     * @return {?}
     */
    limitPanY() {
        /** @type {?} */
        const imgHeight = this.getImageHeight();
        /** @type {?} */
        const scaledImgHeight = imgHeight * this.scale;
        /** @type {?} */
        const parentHeight = this.parentElement.offsetHeight;
        /** @type {?} */
        const elementHeight = this.element.offsetHeight;
        if (scaledImgHeight < parentHeight) {
            this.moveY = (parentHeight - elementHeight * this.scale) / 2;
        }
        else {
            /** @type {?} */
            const imgOffsetTop = ((imgHeight - elementHeight) * this.scale) / 2;
            if (this.moveY > imgOffsetTop) {
                this.moveY = imgOffsetTop;
            }
            else if ((scaledImgHeight + Math.abs(imgOffsetTop) - parentHeight) + this.moveY < 0) {
                this.moveY = -(scaledImgHeight + Math.abs(imgOffsetTop) - parentHeight);
            }
        }
    }
    /**
     * @return {?}
     */
    limitPanX() {
        /** @type {?} */
        const imgWidth = this.getImageWidth();
        /** @type {?} */
        const scaledImgWidth = imgWidth * this.scale;
        /** @type {?} */
        const parentWidth = this.parentElement.offsetWidth;
        /** @type {?} */
        const elementWidth = this.element.offsetWidth;
        if (scaledImgWidth < parentWidth) {
            this.moveX = (parentWidth - elementWidth * this.scale) / 2;
        }
        else {
            /** @type {?} */
            const imgOffsetLeft = ((imgWidth - elementWidth) * this.scale) / 2;
            if (this.moveX > imgOffsetLeft) {
                this.moveX = imgOffsetLeft;
            }
            else if ((scaledImgWidth + Math.abs(imgOffsetLeft) - parentWidth) + this.moveX < 0) {
                this.moveX = -(imgWidth * this.scale + Math.abs(imgOffsetLeft) - parentWidth);
            }
        }
    }
    /**
     * @return {?}
     */
    setBasicStyles() {
        this.element.style.display = 'flex';
        this.element.style.alignItems = 'center';
        this.element.style.justifyContent = 'center';
        this.element.style.transformOrigin = '0 0';
        this.setImageSize();
        this.setDraggableImage();
    }
    /**
     * @return {?}
     */
    removeBasicStyles() {
        this.element.style.display = '';
        this.element.style.alignItems = '';
        this.element.style.justifyContent = '';
        this.element.style.transformOrigin = '';
        this.removeImageSize();
        this.removeDraggableImage();
    }
    /**
     * @return {?}
     */
    setDraggableImage() {
        /** @type {?} */
        const imgElement = this.getImageElement();
        if (imgElement) {
            imgElement.draggable = this.properties.draggableImage;
        }
    }
    /**
     * @return {?}
     */
    removeDraggableImage() {
        /** @type {?} */
        const imgElement = this.getImageElement();
        if (imgElement) {
            imgElement.draggable = true;
        }
    }
    /**
     * @return {?}
     */
    setImageSize() {
        /** @type {?} */
        const imgElement = this.element.getElementsByTagName(this.elementTarget);
        if (imgElement.length) {
            imgElement[0].style.maxWidth = '100%';
            imgElement[0].style.maxHeight = '100%';
            this.setAutoHeight();
        }
    }
    /**
     * @return {?}
     */
    setAutoHeight() {
        /** @type {?} */
        const imgElement = this.element.getElementsByTagName(this.elementTarget);
        if (!this.properties.autoHeight || !imgElement.length) {
            return;
        }
        /** @type {?} */
        const imgNaturalWidth = imgElement[0].getAttribute("width");
        /** @type {?} */
        const imgNaturalHeight = imgElement[0].getAttribute("height");
        /** @type {?} */
        const sizeRatio = imgNaturalWidth / imgNaturalHeight;
        /** @type {?} */
        const parentWidth = this.parentElement.offsetWidth;
        imgElement[0].style.maxHeight = parentWidth / sizeRatio + "px";
    }
    /**
     * @return {?}
     */
    removeImageSize() {
        /** @type {?} */
        const imgElement = this.element.getElementsByTagName(this.elementTarget);
        if (imgElement.length) {
            imgElement[0].style.maxWidth = '';
            imgElement[0].style.maxHeight = '';
        }
    }
    /**
     * @return {?}
     */
    getElementPosition() {
        this.elementPosition = this.element.parentElement.getBoundingClientRect();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    getTouchstartPosition(event) {
        const { clientX, clientY } = this.getClientPosition(event);
        this.startX = clientX - this.elementPosition.left;
        this.startY = clientY - this.elementPosition.top;
    }
    /**
     * @param {?} event
     * @param {?=} index
     * @return {?}
     */
    getClientPosition(event, index = 0) {
        /** @type {?} */
        let clientX;
        /** @type {?} */
        let clientY;
        if (event.type === "touchstart" || event.type === "touchmove") {
            clientX = event.touches[index].clientX;
            clientY = event.touches[index].clientY;
        }
        if (event.type === "mousedown" || event.type === "mousemove") {
            clientX = event.clientX;
            clientY = event.clientY;
        }
        return {
            clientX,
            clientY
        };
    }
    /**
     * @return {?}
     */
    resetScale() {
        this.scale = 1;
        this.moveX = 0;
        this.moveY = 0;
        this.updateInitialValues();
        this.transformElement(this.properties.transitionDuration);
    }
    /**
     * @return {?}
     */
    updateInitialValues() {
        this.initialScale = this.scale;
        this.initialMoveX = this.moveX;
        this.initialMoveY = this.moveY;
    }
    /**
     * @param {?} touches
     * @return {?}
     */
    getDistance(touches) {
        return Math.sqrt(Math.pow(touches[0].pageX - touches[1].pageX, 2) + Math.pow(touches[0].pageY - touches[1].pageY, 2));
    }
    /**
     * @return {?}
     */
    getImageHeight() {
        /** @type {?} */
        const img = this.element.getElementsByTagName(this.elementTarget)[0];
        return img.offsetHeight;
    }
    /**
     * @return {?}
     */
    getImageWidth() {
        /** @type {?} */
        const img = this.element.getElementsByTagName(this.elementTarget)[0];
        return img.offsetWidth;
    }
    /**
     * @param {?} duration
     * @return {?}
     */
    transformElement(duration) {
        this.element.style.transition = "all " + duration + "ms";
        this.element.style.transform = "matrix(" + Number(this.scale) + ", 0, 0, " + Number(this.scale) + ", " + Number(this.moveX) + ", " + Number(this.moveY) + ")";
    }
    /**
     * @return {?}
     */
    isTouchScreen() {
        /** @type {?} */
        const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
        if (('ontouchstart' in window)) {
            return true;
        }
        // include the 'heartz' as a way to have a non matching MQ to help terminate the join
        // https://git.io/vznFH
        /** @type {?} */
        const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
        return this.getMatchMedia(query);
    }
    /**
     * @param {?} query
     * @return {?}
     */
    getMatchMedia(query) {
        return window.matchMedia(query).matches;
    }
    /**
     * @return {?}
     */
    isDragging() {
        if (this.properties.disablePan) {
            return false;
        }
        /** @type {?} */
        const imgHeight = this.getImageHeight();
        /** @type {?} */
        const imgWidth = this.getImageWidth();
        if (this.scale > 1) {
            return imgHeight * this.scale > this.parentElement.offsetHeight ||
                imgWidth * this.scale > this.parentElement.offsetWidth;
        }
        if (this.scale === 1) {
            return imgHeight > this.parentElement.offsetHeight ||
                imgWidth > this.parentElement.offsetWidth;
        }
    }
    /**
     * @return {?}
     */
    pollLimitZoom() {
        /** @type {?} */
        let poll = setInterval((/**
         * @return {?}
         */
        () => {
            if (this.getLimitZoom()) {
                clearInterval(poll);
            }
        }), 10);
    }
    /**
     * @return {?}
     */
    getImageElement() {
        /** @type {?} */
        const imgElement = this.element.getElementsByTagName(this.elementTarget);
        if (imgElement.length) {
            return imgElement[0];
        }
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    toggleZoom(event = false) {
        if (this.initialScale === 1) {
            if (event && event.changedTouches) {
                if (this.properties.doubleTapScale === undefined) {
                    return;
                }
                /** @type {?} */
                const changedTouches = event.changedTouches;
                this.scale = this.initialScale * this.properties.doubleTapScale;
                this.moveX = this.initialMoveX - (changedTouches[0].clientX - this.elementPosition.left) * (this.properties.doubleTapScale - 1);
                this.moveY = this.initialMoveY - (changedTouches[0].clientY - this.elementPosition.top) * (this.properties.doubleTapScale - 1);
            }
            else {
                /** @type {?} */
                let zoomControlScale = this.properties.zoomControlScale || 0;
                this.scale = this.initialScale * (zoomControlScale + 1);
                this.moveX = this.initialMoveX - this.element.offsetWidth * (this.scale - 1) / 2;
                this.moveY = this.initialMoveY - this.element.offsetHeight * (this.scale - 1) / 2;
            }
            this.centeringImage();
            this.updateInitialValues();
            this.transformElement(this.properties.transitionDuration);
        }
        else {
            this.resetScale();
        }
    }
    /**
     * @param {?} properties
     * @return {?}
     */
    setZoom(properties) {
        this.scale = properties.scale;
        /** @type {?} */
        let xCenter;
        /** @type {?} */
        let yCenter;
        /** @type {?} */
        let visibleAreaWidth = this.element.offsetWidth;
        /** @type {?} */
        let visibleAreaHeight = this.element.offsetHeight;
        /** @type {?} */
        let scalingPercent = (visibleAreaWidth * this.scale) / (visibleAreaWidth * this.initialScale);
        if (properties.center) {
            xCenter = properties.center[0];
            yCenter = properties.center[1];
        }
        else {
            xCenter = visibleAreaWidth / 2 - this.initialMoveX;
            yCenter = visibleAreaHeight / 2 - this.initialMoveY;
        }
        this.moveX = this.initialMoveX - ((scalingPercent * xCenter) - xCenter);
        this.moveY = this.initialMoveY - ((scalingPercent * yCenter) - yCenter);
        this.centeringImage();
        this.updateInitialValues();
        this.transformElement(this.properties.transitionDuration);
    }
    /**
     * @return {?}
     */
    alignImage() {
        /** @type {?} */
        const isMoveChanged = this.centeringImage();
        if (isMoveChanged) {
            this.updateInitialValues();
            this.transformElement(this.properties.transitionDuration);
        }
    }
    /**
     * @return {?}
     */
    destroy() {
        this.removeBasicStyles();
        this.touches.destroy();
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pinch-zoom.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PinchZoomComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.transitionDuration = 200;
        this.doubleTap = true;
        this.doubleTapScale = 2;
        this.autoZoomOut = false;
        this.disabled = false;
        this.zoomControlScale = 1;
        this.backgroundColor = "rgba(0,0,0,0.85)";
        this.minPanScale = 1.0001;
        this.minScale = 0;
        this.listeners = 'mouse and touch';
        this.wheel = true;
        this.autoHeight = false;
        this.wheelZoomFactor = 0.2;
        this.draggableImage = false;
        this.applyOptionsDefault(defaultProperties, {});
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set properties(value) {
        if (value) {
            this._properties = value;
        }
    }
    /**
     * @return {?}
     */
    get properties() {
        return this._properties;
    }
    /**
     * @return {?}
     */
    get hostOverflow() {
        return this.properties['overflow'];
    }
    /**
     * @return {?}
     */
    get hostBackgroundColor() {
        return this.properties['backgroundColor'];
    }
    /**
     * @return {?}
     */
    get isTouchScreen() {
        /** @type {?} */
        var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
        /** @type {?} */
        var mq = (/**
         * @param {?} query
         * @return {?}
         */
        function (query) {
            return window.matchMedia(query).matches;
        });
        if (('ontouchstart' in window)) {
            return true;
        }
        // include the 'heartz' as a way to have a non matching MQ to help terminate the join
        // https://git.io/vznFH
        /** @type {?} */
        var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
        return mq(query);
    }
    /**
     * @return {?}
     */
    get isDragging() {
        return this.pinchZoom.isDragging();
    }
    /**
     * @return {?}
     */
    get isDisabled() {
        return this.properties['disabled'];
    }
    /**
     * @return {?}
     */
    get scale() {
        return this.pinchZoom.scale;
    }
    /**
     * @return {?}
     */
    get isZoomedIn() {
        return this.scale > 1;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initPinchZoom();
        /* Calls the method until the image size is available */
        this.pollLimitZoom();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        let changedOptions = this.getProperties(changes);
        changedOptions = this.renameProperties(changedOptions);
        this.applyOptionsDefault(defaultProperties, changedOptions);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy();
    }
    /**
     * @return {?}
     */
    initPinchZoom() {
        if (this.properties['disabled']) {
            return;
        }
        this.properties['element'] = this.elementRef.nativeElement.querySelector('.pinch-zoom-content');
        this.pinchZoom = new IvyPinch(this.properties);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    getProperties(changes) {
        /** @type {?} */
        let properties = {};
        for (var prop in changes) {
            if (prop !== 'properties') {
                properties[prop] = changes[prop].currentValue;
            }
            if (prop === 'properties') {
                properties = changes[prop].currentValue;
            }
        }
        return properties;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    renameProperties(options) {
        for (var prop in options) {
            if (backwardCompatibilityProperties[prop]) {
                options[backwardCompatibilityProperties[prop]] = options[prop];
                delete options[prop];
            }
        }
        return options;
    }
    /**
     * @param {?} defaultOptions
     * @param {?} options
     * @return {?}
     */
    applyOptionsDefault(defaultOptions, options) {
        this.properties = Object.assign({}, defaultOptions, options);
    }
    /**
     * @return {?}
     */
    toggleZoom() {
        this.pinchZoom.toggleZoom();
    }
    /**
     * @return {?}
     */
    isControl() {
        if (this.isDisabled) {
            return false;
        }
        if (this.properties['disableZoomControl'] === "disable") {
            return false;
        }
        if (this.isTouchScreen && this.properties['disableZoomControl'] === "auto") {
            return false;
        }
        return true;
    }
    /**
     * @return {?}
     */
    pollLimitZoom() {
        this.pinchZoom.pollLimitZoom();
    }
    /**
     * @return {?}
     */
    destroy() {
        this.pinchZoom.destroy();
    }
}
PinchZoomComponent.ɵfac = function PinchZoomComponent_Factory(t) { return new (t || PinchZoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
PinchZoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PinchZoomComponent, selectors: [["pinch-zoom"], ["", "pinch-zoom", ""]], hostVars: 4, hostBindings: function PinchZoomComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("overflow", ctx.hostOverflow)("background-color", ctx.hostBackgroundColor);
    } }, inputs: { transitionDuration: ["transition-duration", "transitionDuration"], doubleTap: ["double-tap", "doubleTap"], doubleTapScale: ["double-tap-scale", "doubleTapScale"], autoZoomOut: ["auto-zoom-out", "autoZoomOut"], disabled: "disabled", zoomControlScale: "zoomControlScale", backgroundColor: "backgroundColor", minPanScale: "minPanScale", minScale: "minScale", listeners: "listeners", wheel: "wheel", autoHeight: "autoHeight", wheelZoomFactor: "wheelZoomFactor", draggableImage: "draggableImage", properties: "properties", limitZoom: ["limit-zoom", "limitZoom"], disablePan: "disablePan", overflow: "overflow", disableZoomControl: "disableZoomControl", limitPan: "limitPan" }, exportAs: ["pinchZoom"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 3, vars: 3, consts: [[1, "pinch-zoom-content"], ["class", "pz-zoom-button pz-zoom-control-position-bottom", 3, "pz-zoom-button-out", "click", 4, "ngIf"], [1, "pz-zoom-button", "pz-zoom-control-position-bottom", 3, "click"]], template: function PinchZoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PinchZoomComponent_div_2_Template, 1, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pz-dragging", ctx.isDragging);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isControl());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%]{position:relative;overflow:hidden;display:block}.pinch-zoom-content[_ngcontent-%COMP%]{height:inherit}.pz-dragging[_ngcontent-%COMP%]{cursor:all-scroll}.pz-zoom-button[_ngcontent-%COMP%]{position:absolute;z-index:1000;color:#fff;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgc3R5bGU9IiI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6IiBpZD0ic3ZnXzEiIGNsYXNzPSIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIvPjxwYXRoIGQ9Ik0xMiAxMGgtMnYySDl2LTJIN1Y5aDJWN2gxdjJoMnYxeiIgaWQ9InN2Z18zIiBjbGFzcz0iIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz48L2c+PC9zdmc+),url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6TTcgOWg1djFIN3oiIGlkPSJzdmdfMiIgY2xhc3M9IiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIi8+PC9nPjwvc3ZnPg==);background-color:rgba(0,0,0,.8);background-position:center,-1000px;background-repeat:no-repeat,no-repeat;background-size:40px;width:56px;height:56px;border-radius:4px;opacity:.5;cursor:pointer;transition:opacity .1s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pz-zoom-button-out[_ngcontent-%COMP%]{background-position:-1000px,center}.pz-zoom-button[_ngcontent-%COMP%]:hover{opacity:.7}.pz-zoom-button.pz-zoom-control-position-right[_ngcontent-%COMP%]{right:16px;top:50%;margin-top:-28px}.pz-zoom-button.pz-zoom-control-position-right-bottom[_ngcontent-%COMP%]{right:16px;bottom:32px}.pz-zoom-button.pz-zoom-control-position-bottom[_ngcontent-%COMP%]{bottom:16px;left:50%;margin-left:-28px}.pz-zoom-control[_ngcontent-%COMP%]{position:absolute;background-color:rgba(0,0,0,.8);border-radius:4px;overflow:hidden}.pz-zoom-control.pz-zoom-control-position-right[_ngcontent-%COMP%]{right:16px;top:50%;margin-top:-48px}.pz-zoom-control.pz-zoom-control-position-right-bottom[_ngcontent-%COMP%]{right:16px;bottom:32px}.pz-zoom-control.pz-zoom-control-position-bottom[_ngcontent-%COMP%]{bottom:16px;left:50%;margin-left:-48px}.pz-zoom-in[_ngcontent-%COMP%], .pz-zoom-out[_ngcontent-%COMP%]{width:48px;height:48px;background-position:center;background-repeat:no-repeat;opacity:1;cursor:pointer}.pz-zoom-in[_ngcontent-%COMP%]:hover, .pz-zoom-out[_ngcontent-%COMP%]:hover{background-color:rgba(255,255,255,.2)}.pz-zoom-control-position-bottom[_ngcontent-%COMP%]   .pz-zoom-in[_ngcontent-%COMP%], .pz-zoom-control-position-bottom[_ngcontent-%COMP%]   .pz-zoom-out[_ngcontent-%COMP%]{float:right}.pz-disabled[_ngcontent-%COMP%]{opacity:.5;cursor:default}.pz-disabled[_ngcontent-%COMP%]:hover{background-color:rgba(255,255,255,0)}.pz-zoom-in[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgc3R5bGU9IiI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnoiIGlkPSJzdmdfMSIgY2xhc3M9IiIgc3Ryb2tlPSJub25lIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz48cGF0aCBkPSJNLTE1LjgzNjczNDQyMDQ2MTY1Myw0NC41MzU0MDkzMDY3MTAxOCBoNTguMjA0MDgwODI3NTkzMDkgdi02LjU3NjIyNjcyMzM2OTIyMTUgSC0xNS44MzY3MzQ0MjA0NjE2NTMgeiIgZmlsbD0ibm9uZSIgaWQ9InN2Z18yIiBjbGFzcz0iIiBzdHJva2U9Im5vbmUiLz48L2c+PC9zdmc+)}.pz-zoom-out[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE5IDEzSDV2LTJoMTR2MnoiIGlkPSJzdmdfMSIgY2xhc3M9IiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIi8+PC9nPjwvc3ZnPg==)}"] });
/** @nocollapse */
PinchZoomComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
PinchZoomComponent.propDecorators = {
    properties: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['properties',] }],
    transitionDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['transition-duration',] }],
    doubleTap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['double-tap',] }],
    doubleTapScale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['double-tap-scale',] }],
    autoZoomOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['auto-zoom-out',] }],
    limitZoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['limit-zoom',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }],
    disablePan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    overflow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    zoomControlScale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disableZoomControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    limitPan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    minPanScale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    minScale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    listeners: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    wheel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    autoHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    wheelZoomFactor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    draggableImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hostOverflow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.overflow',] }],
    hostBackgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.background-color',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PinchZoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pinch-zoom, [pinch-zoom]',
                exportAs: 'pinchZoom',
                template: "<div class=\"pinch-zoom-content\" [class.pz-dragging]=\"isDragging\">\n\t<ng-content></ng-content>\n</div>\n\n<!-- Control: one button -->\n<div class=\"pz-zoom-button pz-zoom-control-position-bottom\" \n\t[class.pz-zoom-button-out]=\"isZoomedIn\" \n\t*ngIf=\"isControl()\" \n\t(click)=\"toggleZoom()\"></div>",
                styles: [":host{position:relative;overflow:hidden;display:block}.pinch-zoom-content{height:inherit}.pz-dragging{cursor:all-scroll}.pz-zoom-button{position:absolute;z-index:1000;color:#fff;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgc3R5bGU9IiI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6IiBpZD0ic3ZnXzEiIGNsYXNzPSIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIvPjxwYXRoIGQ9Ik0xMiAxMGgtMnYySDl2LTJIN1Y5aDJWN2gxdjJoMnYxeiIgaWQ9InN2Z18zIiBjbGFzcz0iIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz48L2c+PC9zdmc+),url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6TTcgOWg1djFIN3oiIGlkPSJzdmdfMiIgY2xhc3M9IiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIi8+PC9nPjwvc3ZnPg==);background-color:rgba(0,0,0,.8);background-position:center,-1000px;background-repeat:no-repeat,no-repeat;background-size:40px;width:56px;height:56px;border-radius:4px;opacity:.5;cursor:pointer;transition:opacity .1s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pz-zoom-button-out{background-position:-1000px,center}.pz-zoom-button:hover{opacity:.7}.pz-zoom-button.pz-zoom-control-position-right{right:16px;top:50%;margin-top:-28px}.pz-zoom-button.pz-zoom-control-position-right-bottom{right:16px;bottom:32px}.pz-zoom-button.pz-zoom-control-position-bottom{bottom:16px;left:50%;margin-left:-28px}.pz-zoom-control{position:absolute;background-color:rgba(0,0,0,.8);border-radius:4px;overflow:hidden}.pz-zoom-control.pz-zoom-control-position-right{right:16px;top:50%;margin-top:-48px}.pz-zoom-control.pz-zoom-control-position-right-bottom{right:16px;bottom:32px}.pz-zoom-control.pz-zoom-control-position-bottom{bottom:16px;left:50%;margin-left:-48px}.pz-zoom-in,.pz-zoom-out{width:48px;height:48px;background-position:center;background-repeat:no-repeat;opacity:1;cursor:pointer}.pz-zoom-in:hover,.pz-zoom-out:hover{background-color:rgba(255,255,255,.2)}.pz-zoom-control-position-bottom .pz-zoom-in,.pz-zoom-control-position-bottom .pz-zoom-out{float:right}.pz-disabled{opacity:.5;cursor:default}.pz-disabled:hover{background-color:rgba(255,255,255,0)}.pz-zoom-in{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgc3R5bGU9IiI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnoiIGlkPSJzdmdfMSIgY2xhc3M9IiIgc3Ryb2tlPSJub25lIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz48cGF0aCBkPSJNLTE1LjgzNjczNDQyMDQ2MTY1Myw0NC41MzU0MDkzMDY3MTAxOCBoNTguMjA0MDgwODI3NTkzMDkgdi02LjU3NjIyNjcyMzM2OTIyMTUgSC0xNS44MzY3MzQ0MjA0NjE2NTMgeiIgZmlsbD0ibm9uZSIgaWQ9InN2Z18yIiBjbGFzcz0iIiBzdHJva2U9Im5vbmUiLz48L2c+PC9zdmc+)}.pz-zoom-out{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE5IDEzSDV2LTJoMTR2MnoiIGlkPSJzdmdfMSIgY2xhc3M9IiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIi8+PC9nPjwvc3ZnPg==)}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { transitionDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['transition-duration']
        }], doubleTap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['double-tap']
        }], doubleTapScale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['double-tap-scale']
        }], autoZoomOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['auto-zoom-out']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['disabled']
        }], zoomControlScale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minPanScale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minScale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listeners: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], wheel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], wheelZoomFactor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], draggableImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], properties: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['properties']
        }], hostOverflow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.overflow']
        }], hostBackgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.background-color']
        }], limitZoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['limit-zoom']
        }], disablePan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], overflow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disableZoomControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], limitPan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pinch-zoom.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PinchZoomModule {
}
PinchZoomModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PinchZoomModule });
PinchZoomModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PinchZoomModule_Factory(t) { return new (t || PinchZoomModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PinchZoomModule, { declarations: function () { return [PinchZoomComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [PinchZoomComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PinchZoomModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    PinchZoomComponent
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    PinchZoomComponent
                ],
                providers: [],
                bootstrap: [],
                entryComponents: [
                    PinchZoomComponent
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-pinch-zoom.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-pinch-zoom.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-view/product-view.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-view/product-view.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n    <header class=\"page-header\">\n        <div class=\"d-flex align-items-center\">\n            <div class=\"mr-auto p-3\">\n                <h1> {{objectData?.name}}</h1>\n            </div>\n            <div class=\"ml-3\">\n                <a class=\"btn custom-shadow btn-link\" [routerLink]=\"['/product']\">\n                    <i class=\"fa fa-chevron-left mr-2 mt-1\"></i>Back to list\n                </a>\n            </div>\n        </div>\n    </header>\n    <section class=\"page-content container-fluid\">\n        <div class=\"lorder-wrap\">\n            <div class=\"loader\"></div>\n        </div>\n        <div class=\" p-3\">\n            <!-- card card-tabs strache-card -->\n\n            <div class=\"row\">\n                <!-- column -->\n                <div class=\"col-lg-4 col-md-4\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <div class=\"text-center\">\n                                <div style=\"display:inline;\">\n                                    <pinch-zoom [wheel]=\"true\" [wheelZoomFactor]=\"0.2\" [auto-zoom-out]=\"true\">\n                                        <img [src]=\"objectData?.image ? objectData?.image:'assets/images/users/5.jpg'\"\n                                            alt=\"Product Image\" class=\"img-thumbnail\">\n                                    </pinch-zoom>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Price</h4>\n                            <div class=\"mb-2 h3\">\n                                <div style=\"display:inline;width:250px;height:250px;\">\n                                    ₹ {{objectData?.price |number}}\n                                </div>\n                            </div>\n                            <h4 class=\"card-title\">Customer Rating</h4>\n                            <div style=\"display:inline;width:250px;height:250px;\">\n                                <ng-container *ngFor=\"let qrs of [1,2,3,4,5]\">\n                                    <span>\n                                        <i [ngClass]=\"qrs > objectData?.rate ? '' : 'on'\" class=\"fa fa-star\"></i>\n                                    </span>\n                                </ng-container>\n                            </div>\n                            <h4 class=\"card-title mt-2\">Category</h4>\n                            <div style=\"display:inline;width:250px;height:250px;\">\n                                {{getjson(objectData?.category_id)?.label }}\n                            </div>\n                            <h4 class=\"card-title mt-2\">Brand</h4>\n                            <div style=\"display:inline;width:250px;height:250px;\">\n                                {{getjson(objectData?.brand_id)?.label }}\n                            </div>\n                            <h4 class=\"card-title mt-2\">Status</h4>\n                            <div style=\"display:inline;width:250px;height:250px;\">\n                                <span *ngIf=\"objectData?.is_active\" class=\"badge badge-pill badge-info\n                                \">Active</span>\n                                <span *ngIf=\"!objectData?.is_active\" class=\"badge badge-pill badge-danger\n                                \">De-active</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4\">\n                    <div class=\"text-center\">\n                        <div style=\"display:inline;\">\n                            <button type=\"button\" (click)=\"addImage()\" class=\"btn custom-shadow btn-link btn-circle-lg\">\n                                <!-- <i class=\"fa h1 fa-heart\"></i>s -->\n                                <i class=\"fas fa-plus\" style=\"font-size:xx-large;\"></i>\n                                <h1 class=\"text-light card-subtitle\">Add Images</h1>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-12\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Information</h4>\n                            <div style=\"display:inline;width:250px;height:250px;\">\n                                <p>{{objectData?.product_info}}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-12\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Angle offset</h4>\n                            <div style=\"display:inline;width:250px;height:250px;\">\n                                <div id=\"prodetails\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <ng-container *ngFor=\"let pitem of productImageArray\">\n                    <div class=\"col-lg-4 col-md-4\">\n                        <div class=\"card\">\n                            <div class=\"card-body\">\n                                <div class=\"text-center\">\n                                    <div style=\"display:inline;\">\n                                        <pinch-zoom class=\"mb-3\" [wheel]=\"true\" [wheelZoomFactor]=\"0.2\"\n                                            [auto-zoom-out]=\"true\">\n                                            <img [src]=\"pitem?.image ? pitem?.image:'assets/images/users/5.jpg'\"\n                                                alt=\"Product Image\" class=\"img-thumbnail\">\n                                        </pinch-zoom>\n                                    </div>\n                                    <a (click)=\"deleteObject(pitem)\">\n                                        <i class=\"fas fa-trash-alt\"></i>\n                                        Remove\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </ng-container>\n            </div>\n        </div>\n    </section>\n</div>\n\n\n\n<!-- Right bar Model -->\n\n<style>\n    .on {\n        color: orange\n    }\n\n    .btn-circle-lg {\n        width: 257px;\n        height: 257px;\n        line-height: 35px;\n    }\n</style>\n\n\n\n<!-- Bottom modal content -->\n<div id=\"bottom-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm modal-bottom\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\" id=\"bottomModalLabel\">Add Product Image</h4>\n                <button type=\"button\" [disabled]=\"showLoader\" class=\"close\" data-dismiss=\"modal\"\n                    aria-hidden=\"true\">×</button>\n            </div>\n            <div class=\"modal-body text-center\">\n                <div class=\"fileinput text-center fileinput-new\" data-provides=\"fileinput\">\n                    <div class=\"btn-file mt-3\">\n                        <div class=\"thumbnail fileinput-new  rounded\" style=\"width: 250px; height: 250px;\">\n                            <img src=\"assets/images/demo.png\" alt=\"\">\n                        </div>\n                        <div class=\"clearfix\"></div>\n                        <button class=\"fileinput-new btn btn-secondary btn-sm btn-file mt-3\"> Browse\n                            Image </button>\n                        <input accept=\"image/x-png,image/jpeg\" (change)=\"fileChangeEvent($event)\" type=\"file\"\n                            file-model=\"myFile\">\n                        <div class=\"fileinput-preview fileinput-exists thumbnail  rounded\"\n                            style=\"width: 250px; height: 250px;\"></div>\n                    </div>\n                    <div class=\"text-center\">\n                        <a (click)=\"removeFile()\" id=\"remove\" class=\"btn btn-link btn-sm fileinput-exists mt-3\"\n                            data-dismiss=\"fileinput\">Remove</a>\n                    </div>\n                </div>\n                <div *ngIf=\"showLoader\" class=\"progress\">\n                    <div *ngIf=\"showLoader\" class=\"progress-bar progress-bar-striped progress-bar-animated\"\n                        role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 75%\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" [disabled]=\"showLoader\" class=\"btn btn-light\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" (click)=\"submitImage()\" [disabled]=\"showLoader || !selectedFilestatus\"\n                    class=\"btn btn-primary\">Save\n                </button>\n            </div>\n        </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->");

/***/ }),

/***/ "./src/app/product/product-view/product-view.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/product-view/product-view.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewComponent", function() { return ProductViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/__ivy_ngcc__/fesm2015/ngx-editor.js");
/* harmony import */ var prosemirror_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prosemirror-model */ "./node_modules/prosemirror-model/dist/index.es.js");
/* harmony import */ var src_app_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/messages */ "./src/app/messages.ts");







let ProductViewComponent = class ProductViewComponent {
    constructor(activatedRoute, productService) {
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.selectedFilestatus = false;
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.viewId = this.activatedRoute.snapshot.paramMap.get('id');
        }
    }
    ngOnInit() {
        this.productService.getProductById(this.viewId).subscribe((res) => {
            if (res.success) {
                this.objectData = res.data ? res.data : [];
                if (this.objectData.product_detail) {
                    const contentNode = ngx_editor__WEBPACK_IMPORTED_MODULE_4__["schema"].nodeFromJSON(JSON.parse(this.objectData.product_detail));
                    const html = prosemirror_model__WEBPACK_IMPORTED_MODULE_5__["DOMSerializer"].fromSchema(ngx_editor__WEBPACK_IMPORTED_MODULE_4__["schema"]).serializeFragment(contentNode.content);
                    document.getElementById("prodetails").appendChild(html);
                }
            }
        });
        this.getProductImages();
    }
    getjson(data) {
        if (data)
            return JSON.parse(data);
    }
    fileChangeEvent(fileInput) {
        const reg = /(.*?)\.(jpg|jpeg|png|gif|giff)$/;
        if (!fileInput.target.files[0].name.match(reg)) {
            swal.fire('Invalid File!', 'Please select valid file ', 'error');
            this.removeFile();
            return false;
        }
        else {
            this.selectedFilestatus = true;
            this.selectedFile = fileInput.target.files[0];
        }
    }
    removeFile() {
        this.selectedFile = null;
        this.selectedFilestatus = false;
    }
    addImage() {
        document.getElementById("remove").click();
        $('#bottom-modal').modal('show');
    }
    submitImage() {
        this.showLoader = true;
        const formData = new FormData();
        formData.append('product_id', this.viewId);
        if (this.selectedFile) {
            formData.append('file', this.selectedFile);
        }
        this.productService.addProductImages(formData).subscribe((response) => {
            this.showLoader = false;
            if (response.success) {
                $('#bottom-modal').modal('hide');
                this.getProductImages();
                this.removeFile();
            }
            else {
                this.showLoader = false;
            }
        });
    }
    getProductImages() {
        const params = {};
        if (this.viewId) {
            params.product_id = this.viewId;
        }
        this.productService.getProductImageList(params).subscribe((response) => {
            if (response.success) {
                this.productImageArray = response.data.data;
            }
            else {
                this.productImageArray = [];
            }
        }, (error) => {
            this.productImageArray = [];
        });
    }
    deleteObject(object) {
        swal.fire({
            title: src_app_messages__WEBPACK_IMPORTED_MODULE_6__["errorMessage"].delete_header_text,
            text: src_app_messages__WEBPACK_IMPORTED_MODULE_6__["errorMessage"].delete_smalll_text,
            icon: src_app_messages__WEBPACK_IMPORTED_MODULE_6__["errorMessage"].delete_dialogue_type,
            showCancelButton: true,
            confirmButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_6__["errorMessage"].delete_confirm_button,
            cancelButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_6__["errorMessage"].delete_cancel_button,
        }).then((result) => {
            if (result.value) {
                this.productService.deleteProductImage(object.id).subscribe((response) => {
                    if (response.success) {
                        this.getProductImages();
                    }
                });
            }
        }).catch(swal.noop);
    }
};
ProductViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
];
ProductViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-view/product-view.component.html")).default
    })
], ProductViewComponent);



/***/ }),

/***/ "./src/app/product/product-view/product-view.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/product/product-view/product-view.module.ts ***!
  \*************************************************************/
/*! exports provided: routes, ProductViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewModule", function() { return ProductViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _product_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-view.component */ "./src/app/product/product-view/product-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/__ivy_ngcc__/fesm2015/ngx-editor.js");
/* harmony import */ var ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pinch-zoom */ "./node_modules/ngx-pinch-zoom/__ivy_ngcc__/fesm2015/ngx-pinch-zoom.js");








const routes = [
    {
        path: '',
        component: _product_view_component__WEBPACK_IMPORTED_MODULE_3__["ProductViewComponent"]
    }
];
let ProductViewModule = class ProductViewModule {
};
ProductViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_product_view_component__WEBPACK_IMPORTED_MODULE_3__["ProductViewComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_7__["PinchZoomModule"],
            ngx_editor__WEBPACK_IMPORTED_MODULE_6__["NgxEditorModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ]
    })
], ProductViewModule);



/***/ })

}]);
//# sourceMappingURL=product-view-product-view-module-es2015.js.map