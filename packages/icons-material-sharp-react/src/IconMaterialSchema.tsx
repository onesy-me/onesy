import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSchema = (props: IIcon) => {

  return (
    <Icon
      name='Schema'

      short_name='Schema'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-40v-240h100v-80H160v-240h100v-80H160v-240h280v240H340v80h100v80h120v-80h280v240H560v-80H440v80H340v80h100v240H160Zm80-80h120v-80H240v80Zm0-320h120v-80H240v80Zm400 0h120v-80H640v80ZM240-760h120v-80H240v80Zm60-40Zm0 320Zm400 0ZM300-160Z"/>
    </Icon>
  );
};

IconMaterialSchema.displayName = 'OnesyIconMaterialSchema';

export default IconMaterialSchema;
