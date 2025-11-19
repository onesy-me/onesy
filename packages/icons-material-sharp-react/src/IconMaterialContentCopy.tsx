import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContentCopy = (props: IIcon) => {

  return (
    <Icon
      name='ContentCopy'

      short_name='ContentCopy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-240v-640h520v640H280Zm80-80h360v-480H360v480ZM120-80v-640h80v560h440v80H120Zm240-240v-480 480Z"/>
    </Icon>
  );
};

IconMaterialContentCopy.displayName = 'OnesyIconMaterialContentCopy';

export default IconMaterialContentCopy;
