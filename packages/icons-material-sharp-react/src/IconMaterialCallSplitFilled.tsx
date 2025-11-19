import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallSplitFilled = (props: IIcon) => {

  return (
    <Icon
      name='CallSplitFilled'

      short_name='CallSplit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-160v-304L240-664v104h-80v-240h240v80H296l224 224v336h-80Zm154-376-58-58 128-126H560v-80h240v240h-80v-104L594-536Z"/>
    </Icon>
  );
};

IconMaterialCallSplitFilled.displayName = 'OnesyIconMaterialCallSplitFilled';

export default IconMaterialCallSplitFilled;
