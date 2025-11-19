import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoStableFilled = (props: IIcon) => {

  return (
    <Icon
      name='VideoStableFilled'

      short_name='VideoStable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm529-119 72-269q5-16-3.5-30T733-597L322-709q-16-5-30 3.5T273-681l-72 269q-5 16 3.5 30t24.5 19l411 112q16 5 30-3.5t19-24.5Z"/>
    </Icon>
  );
};

IconMaterialVideoStableFilled.displayName = 'OnesyIconMaterialVideoStableFilled';

export default IconMaterialVideoStableFilled;
