import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBook4Filled = (props: IIcon) => {

  return (
    <Icon
      name='Book4Filled'

      short_name='Book4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-320h80v-480h-80v480ZM240-80q-50 0-85-35t-35-85v-560q0-50 35-85t85-35h440v640H240q-17 0-28.5 11.5T200-200q0 17 11.5 28.5T240-160h520v-640h80v720H240Z"/>
    </Icon>
  );
};

IconMaterialBook4Filled.displayName = 'OnesyIconMaterialBook4Filled';

export default IconMaterialBook4Filled;
