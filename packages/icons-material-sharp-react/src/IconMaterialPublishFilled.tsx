import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPublishFilled = (props: IIcon) => {

  return (
    <Icon
      name='PublishFilled'

      short_name='Publish'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-160v-326L336-382l-56-58 200-200 200 200-56 58-104-104v326h-80ZM160-600v-200h640v200h-80v-120H240v120h-80Z"/>
    </Icon>
  );
};

IconMaterialPublishFilled.displayName = 'OnesyIconMaterialPublishFilled';

export default IconMaterialPublishFilled;
