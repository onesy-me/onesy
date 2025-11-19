import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMimoFilled = (props: IIcon) => {

  return (
    <Icon
      name='MimoFilled'

      short_name='Mimo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120v-80l40-40H80v-600h800v600H680l40 40v80H240Z"/>
    </Icon>
  );
};

IconMaterialMimoFilled.displayName = 'OnesyIconMaterialMimoFilled';

export default IconMaterialMimoFilled;
