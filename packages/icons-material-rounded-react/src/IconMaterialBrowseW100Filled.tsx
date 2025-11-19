import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrowseW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='BrowseW100Filled'

      short_name='Browse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-440v-288q0-26 17-43t43-17h208v348H172Zm348-348h208q26 0 43 17t17 43.33V-600H520v-188Zm0 616v-348h268v288q0 26-17 43t-43 17H520ZM172-360h268v188H232q-26 0-43-17t-17-43.33V-360Z"/>
    </Icon>
  );
};

IconMaterialBrowseW100Filled.displayName = 'OnesyIconMaterialBrowseW100Filled';

export default IconMaterialBrowseW100Filled;
