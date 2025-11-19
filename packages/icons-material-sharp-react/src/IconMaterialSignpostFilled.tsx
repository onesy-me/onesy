import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignpostFilled = (props: IIcon) => {

  return (
    <Icon
      name='SignpostFilled'

      short_name='Signpost'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-80v-160H240L120-360l120-120h200v-80H160v-240h280v-80h80v80h200l120 120-120 120H520v80h280v240H520v160h-80Z"/>
    </Icon>
  );
};

IconMaterialSignpostFilled.displayName = 'OnesyIconMaterialSignpostFilled';

export default IconMaterialSignpostFilled;
