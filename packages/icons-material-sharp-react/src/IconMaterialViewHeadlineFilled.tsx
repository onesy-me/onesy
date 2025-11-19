import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewHeadlineFilled = (props: IIcon) => {

  return (
    <Icon
      name='ViewHeadlineFilled'

      short_name='ViewHeadline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-360v-80h640v80H160Zm0 160v-80h640v80H160Zm0-320v-80h640v80H160Zm0-160v-80h640v80H160Z"/>
    </Icon>
  );
};

IconMaterialViewHeadlineFilled.displayName = 'OnesyIconMaterialViewHeadlineFilled';

export default IconMaterialViewHeadlineFilled;
