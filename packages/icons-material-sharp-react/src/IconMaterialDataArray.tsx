import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataArray = (props: IIcon) => {

  return (
    <Icon
      name='DataArray'

      short_name='DataArray'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-160v-80h120v-480H600v-80h200v640H600Zm-440 0v-640h200v80H240v480h120v80H160Z"/>
    </Icon>
  );
};

IconMaterialDataArray.displayName = 'OnesyIconMaterialDataArray';

export default IconMaterialDataArray;
