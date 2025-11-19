import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGrid3x3 = (props: IIcon) => {

  return (
    <Icon
      name='Grid3x3'

      short_name='Grid3x3'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M20,10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4H20z M14,14h-4v-4h4V14z"/></g>
    </Icon>
  );
};

IconMaterialGrid3x3.displayName = 'OnesyIconMaterialGrid3x3';

export default IconMaterialGrid3x3;
