/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { animate, style, transition, trigger } from '@angular/animations';

import {
  componentPrimaryEnterCurve,
  componentPrimaryEnterTiming,
  componentPrimaryLeaveCurve,
  componentPrimaryLeaveTiming,
} from '../../utils/animations/constants';

import { defaultAnimationTiming } from '../../utils/animations/constants';

export const panelAnimation = [
  trigger('skipInitialRender', [transition(':enter', [])]),
  trigger('toggle', [
    transition('void => *', [
      style({ display: 'block', height: 0 }),
      animate(`${componentPrimaryEnterTiming} ${componentPrimaryEnterCurve}`, style({ height: '*' })),
    ]),
    // TODO: Leave Anim
    // the below only works sometimes
    // transition('* => void', [
    //   style({ height: '*' }),
    //   animate(`${componentPrimaryLeaveTiming} ${componentPrimaryLeaveCurve}`, style({ height: 0 })),
    // ]),
  ]),
];

export const stepAnimation = [
  trigger('skipInitialRender', [transition(':enter', [])]),
  trigger('toggle', [
    transition('void => *', [
      style({ display: 'block', height: 0 }),
      animate(`${componentPrimaryEnterTiming} ${componentPrimaryEnterCurve}`, style({ height: '*' })),
    ]),
    transition('* => void', [
      style({ display: 'block' }),
      animate(`${componentPrimaryLeaveTiming} ${componentPrimaryLeaveCurve}`, style({ height: 0, display: 'none' })),
    ]),
  ]),
];
