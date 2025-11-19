import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPackageFilled = (props: IIcon) => {

  return (
    <Icon
      name='PackageFilled'

      short_name='Package'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280h200v-80H280v80ZM120-120v-720h720v720H120Zm200-640v320l160-80 160 80v-320H320Z"/>
    </Icon>
  );
};

IconMaterialPackageFilled.displayName = 'OnesyIconMaterialPackageFilled';

export default IconMaterialPackageFilled;
