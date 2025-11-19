import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBucketCheckFilled = (props: IIcon) => {

  return (
    <Icon
      name='BucketCheckFilled'

      short_name='BucketCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m200-120-80-560h120v-160h480v160h120l-80 560H200Zm238-160 198-198-57-56-141 141-57-57-57 57 114 113ZM320-680h320v-80H320v80Z"/>
    </Icon>
  );
};

IconMaterialBucketCheckFilled.displayName = 'OnesyIconMaterialBucketCheckFilled';

export default IconMaterialBucketCheckFilled;
