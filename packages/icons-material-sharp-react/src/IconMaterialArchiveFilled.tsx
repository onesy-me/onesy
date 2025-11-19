import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArchiveFilled = (props: IIcon) => {

  return (
    <Icon
      name='ArchiveFilled'

      short_name='Archive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM120-120v-608l92-112h536l92 112v608H120Zm96-600h528l-34-40H250l-34 40Z"/>
    </Icon>
  );
};

IconMaterialArchiveFilled.displayName = 'OnesyIconMaterialArchiveFilled';

export default IconMaterialArchiveFilled;
