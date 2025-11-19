import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddFilled = (props: IIcon) => {

  return (
    <Icon
      name='AddFilled'

      short_name='Add'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
    </Icon>
  );
};

IconMaterialAddFilled.displayName = 'OnesyIconMaterialAddFilled';

export default IconMaterialAddFilled;
