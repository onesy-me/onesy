import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTitle = (props: IIcon) => {

  return (
    <Icon
      name='Title'

      short_name='Title'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-680H260q-25 0-42.5-17.5T200-740q0-25 17.5-42.5T260-800h440q25 0 42.5 17.5T760-740q0 25-17.5 42.5T700-680H540v460q0 25-17.5 42.5T480-160q-25 0-42.5-17.5T420-220v-460Z"/>
    </Icon>
  );
};

IconMaterialTitle.displayName = 'OnesyIconMaterialTitle';

export default IconMaterialTitle;
