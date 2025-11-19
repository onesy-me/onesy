import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDisabledByDefault = (props: IIcon) => {

  return (
    <Icon
      name='DisabledByDefault'

      short_name='DisabledByDefault'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200h560v-560H200v560Zm-80 80v-720h720v720H120Zm216-160 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56Zm-136 80v-560 560Z"/>
    </Icon>
  );
};

IconMaterialDisabledByDefault.displayName = 'OnesyIconMaterialDisabledByDefault';

export default IconMaterialDisabledByDefault;
