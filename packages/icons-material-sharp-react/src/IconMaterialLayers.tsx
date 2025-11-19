import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLayers = (props: IIcon) => {

  return (
    <Icon
      name='Layers'

      short_name='Layers'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-118 120-398l66-50 294 228 294-228 66 50-360 280Zm0-202L120-600l360-280 360 280-360 280Zm0-280Zm0 178 230-178-230-178-230 178 230 178Z"/>
    </Icon>
  );
};

IconMaterialLayers.displayName = 'OnesyIconMaterialLayers';

export default IconMaterialLayers;
