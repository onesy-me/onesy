import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArchive = (props: IIcon) => {

  return (
    <Icon
      name='Archive'

      short_name='Archive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm-80 520v-608l92-112h536l92 112v608H120Zm96-600h528l-34-40H250l-34 40Zm264 300Z"/>
    </Icon>
  );
};

IconMaterialArchive.displayName = 'OnesyIconMaterialArchive';

export default IconMaterialArchive;
