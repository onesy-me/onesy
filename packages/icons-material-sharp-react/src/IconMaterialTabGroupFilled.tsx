import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabGroupFilled = (props: IIcon) => {

  return (
    <Icon
      name='TabGroupFilled'

      short_name='TabGroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-640h80v560h560v80H80Zm160-160v-640h640v640H240Zm280-400h280v-160H520v160Z"/>
    </Icon>
  );
};

IconMaterialTabGroupFilled.displayName = 'OnesyIconMaterialTabGroupFilled';

export default IconMaterialTabGroupFilled;
