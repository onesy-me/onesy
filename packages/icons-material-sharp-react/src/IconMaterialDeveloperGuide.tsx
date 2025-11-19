import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeveloperGuide = (props: IIcon) => {

  return (
    <Icon
      name='DeveloperGuide'

      short_name='DeveloperGuide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-640v560h560v-560h-80v280l-100-60-100 60v-280H200Zm0 560v-560 560Z"/>
    </Icon>
  );
};

IconMaterialDeveloperGuide.displayName = 'OnesyIconMaterialDeveloperGuide';

export default IconMaterialDeveloperGuide;
