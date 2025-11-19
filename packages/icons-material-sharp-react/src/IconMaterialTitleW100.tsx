import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTitleW100 = (props: IIcon) => {

  return (
    <Icon
      name='TitleW100'

      short_name='Title'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-212v-507H253v-29h455v29H495v507h-29Z"/>
    </Icon>
  );
};

IconMaterialTitleW100.displayName = 'OnesyIconMaterialTitleW100';

export default IconMaterialTitleW100;
