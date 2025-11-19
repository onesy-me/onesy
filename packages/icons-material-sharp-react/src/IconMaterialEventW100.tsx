import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEventW100 = (props: IIcon) => {

  return (
    <Icon
      name='EventW100'

      short_name='Event'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-240q-33 0-56.5-23.5T520-320q0-33 23.5-56.5T600-400q33 0 56.5 23.5T680-320q0 33-23.5 56.5T600-240ZM172-132v-616h140v-92h32v92h276v-92h28v92h140v616H172Zm28-28h560v-368H200v368Zm0-396h560v-164H200v164Zm0 0v-164 164Z"/>
    </Icon>
  );
};

IconMaterialEventW100.displayName = 'OnesyIconMaterialEventW100';

export default IconMaterialEventW100;
