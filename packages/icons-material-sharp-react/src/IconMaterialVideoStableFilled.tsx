import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoStableFilled = (props: IIcon) => {

  return (
    <Icon
      name='VideoStableFilled'

      short_name='VideoStable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm599-80 92-346-488-134-92 346 488 134Z"/>
    </Icon>
  );
};

IconMaterialVideoStableFilled.displayName = 'OnesyIconMaterialVideoStableFilled';

export default IconMaterialVideoStableFilled;
