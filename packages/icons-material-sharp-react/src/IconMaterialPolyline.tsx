import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPolyline = (props: IIcon) => {

  return (
    <Icon
      name='Polyline'

      short_name='Polyline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-80v-100L320-320H120v-240h172l108-124v-196h240v240H468L360-516v126l240 120v-50h240v240H600ZM480-720h80v-80h-80v80ZM200-400h80v-80h-80v80Zm480 240h80v-80h-80v80ZM520-760ZM240-440Zm480 240Z"/>
    </Icon>
  );
};

IconMaterialPolyline.displayName = 'OnesyIconMaterialPolyline';

export default IconMaterialPolyline;
