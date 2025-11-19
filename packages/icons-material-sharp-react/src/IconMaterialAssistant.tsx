import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssistant = (props: IIcon) => {

  return (
    <Icon
      name='Assistant'

      short_name='Assistant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 23-3-3H3V2h18v18h-6Zm-7-5h4.8l2.2 2.2 2.2-2.2H19V4H5ZM5 4v14Zm8.55 8.55L17 11l-3.45-1.55L12 6l-1.55 3.45L7 11l3.45 1.55L12 16Z"/>
    </Icon>
  );
};

IconMaterialAssistant.displayName = 'OnesyIconMaterialAssistant';

export default IconMaterialAssistant;
