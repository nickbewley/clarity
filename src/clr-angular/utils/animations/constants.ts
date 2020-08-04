/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

// ———— OLD
export const defaultAnimationTiming = '0.2s ease-in-out';

// –——— NEW
// ———— Atomic Animations
// primary
export const atomicPrimaryEnterCurve = 'cubic-bezier(0, 1.5, 0.5, 1)';
export const atomicPrimaryEnterTiming = '0.2s';
export const atomicPrimaryLeaveCurve = 'cubic-bezier(0,.99,0,.99)';
export const atomicPrimaryLeaveTiming = '0.2s';

// secondary
export const atomicSecondaryEnterCurve = 'cubic-bezier(0, 1.5, 0.5, 1)';
export const atomicSecondaryEnterTiming = '0.4s';
export const atomicSecondaryLeaveCurve = 'cubic-bezier(0, 1.5, 0.5, 1)';
export const atomicSecondaryLeaveTiming = '0.1s';

// –——— Component Animations
// primary
export const componentPrimaryEnterCurve = 'cubic-bezier(0,.99,0,.99)';
export const componentPrimaryEnterTiming = '0.4s';
export const componentPrimaryLeaveCurve = 'cubic-bezier(0,.99,0,.99)';
export const componentPrimaryLeaveTiming = '0.3s';

// secondary
// todo

// –——— Page Animations
// primary
export const pagePrimaryEnterCurve = 'cubic-bezier(0,.99,0,.99)';
export const pagePrimaryEnterTiming = '0.25s';
export const pagePrimaryLeaveCurve = 'cubic-bezier(0,.99,0,.99)';
export const pagePrimaryLeaveTiming = '0.2s';

// ———— Progress Animations
// primary
export const progressPrimaryCurve = 'cubic-bezier(.17,.4,.8,.79)';
export const progressPrimaryTiming = '0.79s';

// secondary
export const progressSecondaryCurve = 'cubic-bezier(.34,.01,.39,1)';
export const progressSecondaryTiming = '2s';
