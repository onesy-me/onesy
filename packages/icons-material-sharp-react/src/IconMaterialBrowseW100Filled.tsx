import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrowseW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='BrowseW100Filled'

      short_name='Browse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-188h268v188H172Zm348 0v-348h268v348H520ZM172-440v-348h268v348H172Zm348-160v-188h268v188H520Z"/>
    </Icon>
  );
};

IconMaterialBrowseW100Filled.displayName = 'OnesyIconMaterialBrowseW100Filled';

export default IconMaterialBrowseW100Filled;
