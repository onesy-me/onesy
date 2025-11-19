import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShelvesFilled = (props: IIcon) => {

  return (
    <Icon
      name='ShelvesFilled'

      short_name='Shelves'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-40v-880h80v80h560v-80h80v880h-80v-80H200v80h-80Zm80-480h80v-160h240v160h240v-240H200v240Zm0 320h240v-160h240v160h80v-240H200v240Z"/>
    </Icon>
  );
};

IconMaterialShelvesFilled.displayName = 'OnesyIconMaterialShelvesFilled';

export default IconMaterialShelvesFilled;
