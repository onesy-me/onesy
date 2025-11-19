import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='BookW100Filled'

      short_name='Book'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h416q26 0 43 17t17 43v576q0 26-17 43t-43 17H272Zm220-668v208q0 9 7 13.5t15-.5l36-21q8-5 15.5-5t15.5 5l36 21q8 5 15.5.5T640-592v-208H492Z"/>
    </Icon>
  );
};

IconMaterialBookW100Filled.displayName = 'OnesyIconMaterialBookW100Filled';

export default IconMaterialBookW100Filled;
