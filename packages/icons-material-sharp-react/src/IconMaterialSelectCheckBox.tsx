import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSelectCheckBox = (props: IIcon) => {

  return (
    <Icon
      name='SelectCheckBox'

      short_name='SelectCheckBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h675l-80 80H200v560h560v-266l80-80v426H120Zm341-160L235-506l56-56 170 170 367-367 57 55-424 424Z"/>
    </Icon>
  );
};

IconMaterialSelectCheckBox.displayName = 'OnesyIconMaterialSelectCheckBox';

export default IconMaterialSelectCheckBox;
