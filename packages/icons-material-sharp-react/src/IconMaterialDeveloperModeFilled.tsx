import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeveloperModeFilled = (props: IIcon) => {

  return (
    <Icon
      name='DeveloperModeFilled'

      short_name='DeveloperMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M344-296 160-480l184-184 56 58-126 126 126 126-56 58Zm-144 16h80v40h400v-40h80v240H200v-240Zm80-400h-80v-240h560v240h-80v-40H280v40Zm336 384-56-58 126-126-126-126 56-58 184 184-184 184Z"/>
    </Icon>
  );
};

IconMaterialDeveloperModeFilled.displayName = 'OnesyIconMaterialDeveloperModeFilled';

export default IconMaterialDeveloperModeFilled;
