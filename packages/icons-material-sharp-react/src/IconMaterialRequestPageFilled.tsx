import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRequestPageFilled = (props: IIcon) => {

  return (
    <Icon
      name='RequestPageFilled'

      short_name='RequestPage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-240h80v-40h80v-200H440v-40h160v-80h-80v-40h-80v40h-80v200h160v40H360v80h80v40ZM160-80v-800h400l240 240v560H160Z"/>
    </Icon>
  );
};

IconMaterialRequestPageFilled.displayName = 'OnesyIconMaterialRequestPageFilled';

export default IconMaterialRequestPageFilled;
