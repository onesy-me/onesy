import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMan = (props: IIcon) => {

  return (
    <Icon
      name='Man'

      short_name='Man'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-80v-280h-80v-320h320v320h-80v280H400Zm80-640q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Z"/>
    </Icon>
  );
};

IconMaterialMan.displayName = 'OnesyIconMaterialMan';

export default IconMaterialMan;
