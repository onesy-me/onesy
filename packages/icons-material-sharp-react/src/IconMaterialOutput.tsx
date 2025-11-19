import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutput = (props: IIcon) => {

  return (
    <Icon
      name='Output'

      short_name='Output'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v160h-80v-80H200v560h560v-80h80v160H120Zm560-160-56-56 103-104H360v-80h367L624-624l56-56 200 200-200 200Z"/>
    </Icon>
  );
};

IconMaterialOutput.displayName = 'OnesyIconMaterialOutput';

export default IconMaterialOutput;
