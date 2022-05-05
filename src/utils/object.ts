class ObjectUtils {
  serializeQueryParamsObject(queryParams: any): string {
    this.validateQueryParams(queryParams);
    const queryParamsList: Array<string> = [];
    for(const [key, value] of Object.entries(queryParams)) {
      queryParamsList.push(`${key}=${value}`)
    }
    return queryParamsList.join('&');
  }

  validateQueryParams(queryParams: any): void {
    if (Array.isArray(queryParams) || queryParams == null || typeof queryParams !== 'object') {
      throw new Error('Query params should be type object');
    }
  }
}

export const objectUtils = new ObjectUtils();
