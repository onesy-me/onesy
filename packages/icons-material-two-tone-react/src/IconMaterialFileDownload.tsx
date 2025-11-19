import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileDownload = (props: IIcon) => {

  return (
    <Icon
      name='FileDownload'

      short_name='FileDownload'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="14.17,11 13,11 13,5 11,5 11,11 9.83,11 12,13.17"/><rect height="2" width="14" x="5" y="18"/><path d="M19,9h-4V3H9v6H5l7,7L19,9z M11,11V5h2v6h1.17L12,13.17L9.83,11H11z"/></g></g>
    </Icon>
  );
};

IconMaterialFileDownload.displayName = 'OnesyIconMaterialFileDownload';

export default IconMaterialFileDownload;
