import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWindowW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='WindowW100Filled'

      short_name='Window'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M494-466h294v294H494v-294Zm0-28v-294h294v294H494Zm-28 0H172v-294h294v294Zm0 28v294H172v-294h294Z"/>
    </Icon>
  );
};

IconMaterialWindowW100Filled.displayName = 'OnesyIconMaterialWindowW100Filled';

export default IconMaterialWindowW100Filled;
