import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWebFilled = (props: IIcon) => {

  return (
    <Icon
      name='WebFilled'

      short_name='Web'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-80h420v-140H160v140Zm500 0h140v-360H660v360ZM160-460h420v-140H160v140Z"/>
    </Icon>
  );
};

IconMaterialWebFilled.displayName = 'OnesyIconMaterialWebFilled';

export default IconMaterialWebFilled;
