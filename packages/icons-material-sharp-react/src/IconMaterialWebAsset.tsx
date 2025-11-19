import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWebAsset = (props: IIcon) => {

  return (
    <Icon
      name='WebAsset'

      short_name='WebAsset'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-80h640v-400H160v400Z"/>
    </Icon>
  );
};

IconMaterialWebAsset.displayName = 'OnesyIconMaterialWebAsset';

export default IconMaterialWebAsset;
