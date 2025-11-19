import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialZoomOutMap = (props: IIcon) => {

  return (
    <Icon
      name='ZoomOutMap'

      short_name='ZoomOutMap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-240h80v104l124-124 56 56-124 124h104v80H120Zm480 0v-80h104L580-324l56-56 124 124v-104h80v240H600ZM324-580 200-704v104h-80v-240h240v80H256l124 124-56 56Zm312 0-56-56 124-124H600v-80h240v240h-80v-104L636-580Z"/>
    </Icon>
  );
};

IconMaterialZoomOutMap.displayName = 'OnesyIconMaterialZoomOutMap';

export default IconMaterialZoomOutMap;
