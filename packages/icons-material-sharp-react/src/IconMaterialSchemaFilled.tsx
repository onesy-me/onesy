import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSchemaFilled = (props: IIcon) => {

  return (
    <Icon
      name='SchemaFilled'

      short_name='Schema'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-40v-240h100v-80H160v-240h100v-80H160v-240h280v240H340v80h100v80h120v-80h280v240H560v-80H440v80H340v80h100v240H160Z"/>
    </Icon>
  );
};

IconMaterialSchemaFilled.displayName = 'OnesyIconMaterialSchemaFilled';

export default IconMaterialSchemaFilled;
