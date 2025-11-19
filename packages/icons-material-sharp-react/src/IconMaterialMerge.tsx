import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMerge = (props: IIcon) => {

  return (
    <Icon
      name='Merge'

      short_name='Merge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m256-120-56-56 240-241v-270l-64 63-56-56 160-160 160 160-56 56-64-63v270l240 241-56 56-224-224-224 224Z"/>
    </Icon>
  );
};

IconMaterialMerge.displayName = 'OnesyIconMaterialMerge';

export default IconMaterialMerge;
