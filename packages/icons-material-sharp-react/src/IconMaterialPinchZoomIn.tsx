import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinchZoomIn = (props: IIcon) => {

  return (
    <Icon
      name='PinchZoomIn'

      short_name='PinchZoomIn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m62-460-42-42 117-118H40v-60h200v200h-60v-97L62-460Zm218-260v-200h60v98l117-118 43 43-118 117h98v60H280ZM543-40 304-280l63-65 113 32v-367h80v473l-97-27 114 114h263v-280h80v360H543Zm57-280v-200h80v200h-80Zm120 0v-160h80v160h-80Zm-20 80Z"/>
    </Icon>
  );
};

IconMaterialPinchZoomIn.displayName = 'OnesyIconMaterialPinchZoomIn';

export default IconMaterialPinchZoomIn;
