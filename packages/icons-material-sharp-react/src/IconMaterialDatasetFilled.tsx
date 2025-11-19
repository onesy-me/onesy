import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDatasetFilled = (props: IIcon) => {

  return (
    <Icon
      name='DatasetFilled'

      short_name='Dataset'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm160-400h160v-160H280v160Zm240 0h160v-160H520v160ZM280-280h160v-160H280v160Zm240 0h160v-160H520v160Z"/>
    </Icon>
  );
};

IconMaterialDatasetFilled.displayName = 'OnesyIconMaterialDatasetFilled';

export default IconMaterialDatasetFilled;
