import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNewspaperFilled = (props: IIcon) => {

  return (
    <Icon
      name='NewspaperFilled'

      short_name='Newspaper'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-720l67 67 66-67 67 67 67-67 66 67 67-67 67 67 66-67 67 67 67-67 66 67 67-67v720H80Zm80-80h280v-240H160v240Zm360 0h280v-80H520v80Zm0-160h280v-80H520v80ZM160-520h640v-120H160v120Z"/>
    </Icon>
  );
};

IconMaterialNewspaperFilled.displayName = 'OnesyIconMaterialNewspaperFilled';

export default IconMaterialNewspaperFilled;
