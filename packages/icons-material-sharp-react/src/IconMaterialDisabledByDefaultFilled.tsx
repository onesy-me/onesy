import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDisabledByDefaultFilled = (props: IIcon) => {

  return (
    <Icon
      name='DisabledByDefaultFilled'

      short_name='DisabledByDefault'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm216-160 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56Z"/>
    </Icon>
  );
};

IconMaterialDisabledByDefaultFilled.displayName = 'OnesyIconMaterialDisabledByDefaultFilled';

export default IconMaterialDisabledByDefaultFilled;
