import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../actions/ProductAction";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { loading, product } = useSelector((state) => state.productDetail);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <div className="flex overflow-hidden flex-col">
      <div className="flex flex-col pt-4 pb-10 w-full bg-white max-md:max-w-full">
        <div className="flex gap-4 items-start self-start pl-40 text-sm font-medium leading-6 text-zinc-600 max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-1 items-center whitespace-nowrap">
            <div className="self-stretch my-auto">Home</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f25d12ae80b418cbf93071ee1249b44ec222ea5c3da90a6e5a47e10b35fcf6a?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
              className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
            />
          </div>
          <div className="flex gap-1 items-center whitespace-nowrap">
            <div className="self-stretch my-auto">Shop</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f25d12ae80b418cbf93071ee1249b44ec222ea5c3da90a6e5a47e10b35fcf6a?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
              className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
            />
          </div>
          <div className="flex gap-1 items-center">
            <div className="self-stretch my-auto">
              {product && product.category}
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f25d12ae80b418cbf93071ee1249b44ec222ea5c3da90a6e5a47e10b35fcf6a?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
              className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
            />
          </div>
          <div className="gap-1 self-stretch whitespace-nowrap text-neutral-900">
            Product
          </div>
        </div>
        <div className="flex gap-5 items-start px-32 mt-4 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col min-w-[240px] max-md:max-w-full">
            <div className="flex flex-wrap gap-6 items-start max-md:max-w-full">
              {product.images &&
                product.images.map((image) => (
                  <div className="flex flex-col min-w-[240px] w-[262px]">
                    <img
                      loading="lazy"
                      src={image.url}
                      className="object-contain w-full aspect-[0.75]"
                    />
                  </div>
                ))}
            </div>
            {product.images &&
              product.images.length > 2 &&
              product.images.map((image) => (
                <div className="flex flex-wrap gap-6 items-start mt-6 max-md:max-w-full">
                  <div className="flex flex-col min-w-[240px] w-[262px]">
                    <img
                      loading="lazy"
                      src={image.url}
                      className="object-contain w-full aspect-[0.75]"
                    />
                  </div>
                </div>
              ))}
            {product.images &&
              product.images.length > 4 &&
              product.images.map((image) => (
                <div className="flex flex-wrap gap-6 items-start mt-6 max-md:max-w-full">
                  <div className="flex flex-col min-w-[240px] w-[262px]">
                    <img
                      loading="lazy"
                      src={image.url}
                      className="object-contain w-full aspect-[0.75]"
                    />
                  </div>
                </div>
              ))}
          </div>
          <div className="flex flex-col min-w-[240px] w-[508px] max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[508px]">
              <div className="flex flex-col pb-4 w-full border-b border-solid border-b-gray-200 max-w-[508px] max-md:max-w-full">
                <div className="flex gap-2.5 items-center self-start text-xs leading-loose text-neutral-900">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
                    className="object-contain shrink-0 self-stretch my-auto aspect-[5.49] w-[88px]"
                  />
                  <div className="self-stretch my-auto">
                    {product.numOfReviews} Reviews
                  </div>
                </div>
                <div className="mt-4 text-4xl font-medium tracking-tight leading-none text-neutral-900">
                  {product.name}
                </div>
                <div className="mt-4 text-base leading-7 text-zinc-500 max-md:max-w-full">
                  {product.description}
                </div>
                <div className="flex flex-wrap gap-3 items-center mt-4 w-full font-medium whitespace-nowrap">
                  <div className="self-stretch my-auto text-3xl tracking-tight leading-none text-neutral-900">
                    ${product.price}
                  </div>
                  <div className="self-stretch my-auto text-xl leading-snug text-zinc-500">
                    $400.00
                  </div>
                </div>
              </div>
              <div className="flex flex-col self-start py-4">
                {product.mesurments && (
                  <div className="flex flex-col self-start">
                    <div className="text-base font-semibold leading-loose text-zinc-500">
                      Measurements
                    </div>
                    <div className="mt-2 text-xl leading-relaxed text-black">
                      17 1/2x20 5/8 &quot;
                    </div>
                  </div>
                )}
                {product.color && (
                  <div className="flex flex-col mt-4">
                    <div className="flex flex-col self-start">
                      <div className="flex gap-1 items-center text-base font-semibold leading-loose text-zinc-500">
                        <div className="self-stretch my-auto">Choose Color</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b517caa27200ff2e1605ecbc45d9efaa6e447c40a37ed0fb6dc8397f8b2fabc?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
                          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                        />
                      </div>
                      <div className="mt-2 text-xl leading-relaxed text-black">
                        Black
                      </div>
                    </div>
                    <div className="flex gap-4 items-start mt-4">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8241517e78f3263e556973e63b28fe9d4d15b6c1b6056c6da47545ce145a1a9f?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8241517e78f3263e556973e63b28fe9d4d15b6c1b6056c6da47545ce145a1a9f?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8241517e78f3263e556973e63b28fe9d4d15b6c1b6056c6da47545ce145a1a9f?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8241517e78f3263e556973e63b28fe9d4d15b6c1b6056c6da47545ce145a1a9f?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8241517e78f3263e556973e63b28fe9d4d15b6c1b6056c6da47545ce145a1a9f?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8241517e78f3263e556973e63b28fe9d4d15b6c1b6056c6da47545ce145a1a9f?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8241517e78f3263e556973e63b28fe9d4d15b6c1b6056c6da47545ce145a1a9f?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8241517e78f3263e556973e63b28fe9d4d15b6c1b6056c6da47545ce145a1a9f?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
                        className="object-contain shrink-0 aspect-square w-[72px]"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3e0a19902493c9f198d4f421f11a069c290a4b8448b7f236520f846ce3e1811a?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e0a19902493c9f198d4f421f11a069c290a4b8448b7f236520f846ce3e1811a?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e0a19902493c9f198d4f421f11a069c290a4b8448b7f236520f846ce3e1811a?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e0a19902493c9f198d4f421f11a069c290a4b8448b7f236520f846ce3e1811a?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e0a19902493c9f198d4f421f11a069c290a4b8448b7f236520f846ce3e1811a?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e0a19902493c9f198d4f421f11a069c290a4b8448b7f236520f846ce3e1811a?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e0a19902493c9f198d4f421f11a069c290a4b8448b7f236520f846ce3e1811a?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e0a19902493c9f198d4f421f11a069c290a4b8448b7f236520f846ce3e1811a?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
                        className="object-contain shrink-0 aspect-[0.99] w-[71px]"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/96909f195c158d99522a7867638cb4016a31244be6c4ecdf89ff0942d78a0f90?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/96909f195c158d99522a7867638cb4016a31244be6c4ecdf89ff0942d78a0f90?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/96909f195c158d99522a7867638cb4016a31244be6c4ecdf89ff0942d78a0f90?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/96909f195c158d99522a7867638cb4016a31244be6c4ecdf89ff0942d78a0f90?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/96909f195c158d99522a7867638cb4016a31244be6c4ecdf89ff0942d78a0f90?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/96909f195c158d99522a7867638cb4016a31244be6c4ecdf89ff0942d78a0f90?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/96909f195c158d99522a7867638cb4016a31244be6c4ecdf89ff0942d78a0f90?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/96909f195c158d99522a7867638cb4016a31244be6c4ecdf89ff0942d78a0f90?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
                        className="object-contain shrink-0 aspect-[0.99] w-[71px]"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ab9e69bc87864cea2bdbd250bc9c9cc23d06e933b2f579459415d0a86fd8afc1?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab9e69bc87864cea2bdbd250bc9c9cc23d06e933b2f579459415d0a86fd8afc1?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab9e69bc87864cea2bdbd250bc9c9cc23d06e933b2f579459415d0a86fd8afc1?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab9e69bc87864cea2bdbd250bc9c9cc23d06e933b2f579459415d0a86fd8afc1?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab9e69bc87864cea2bdbd250bc9c9cc23d06e933b2f579459415d0a86fd8afc1?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab9e69bc87864cea2bdbd250bc9c9cc23d06e933b2f579459415d0a86fd8afc1?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab9e69bc87864cea2bdbd250bc9c9cc23d06e933b2f579459415d0a86fd8afc1?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab9e69bc87864cea2bdbd250bc9c9cc23d06e933b2f579459415d0a86fd8afc1?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
                        className="object-contain shrink-0 aspect-square w-[72px]"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col py-6 w-full max-w-[508px] max-md:max-w-full">
              <div className="flex flex-wrap gap-6 items-start max-md:max-w-full">
                <div className="flex flex-col justify-center px-4 py-3 rounded-lg bg-neutral-100 min-h-[52px] w-[127px]">
                  {/* <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/70864e0c5d6d10a4ff7fc7a61798660f8d7a459af9bc4be69e3c9f66a53e51f8?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/70864e0c5d6d10a4ff7fc7a61798660f8d7a459af9bc4be69e3c9f66a53e51f8?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/70864e0c5d6d10a4ff7fc7a61798660f8d7a459af9bc4be69e3c9f66a53e51f8?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/70864e0c5d6d10a4ff7fc7a61798660f8d7a459af9bc4be69e3c9f66a53e51f8?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/70864e0c5d6d10a4ff7fc7a61798660f8d7a459af9bc4be69e3c9f66a53e51f8?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/70864e0c5d6d10a4ff7fc7a61798660f8d7a459af9bc4be69e3c9f66a53e51f8?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/70864e0c5d6d10a4ff7fc7a61798660f8d7a459af9bc4be69e3c9f66a53e51f8?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/70864e0c5d6d10a4ff7fc7a61798660f8d7a459af9bc4be69e3c9f66a53e51f8?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
                    className="object-contain aspect-[3.39] w-[95px]"
                  /> */}
                </div>
                <div className="flex gap-2 justify-center items-center px-10 py-2.5 text-lg font-medium tracking-tight leading-8 text-center whitespace-nowrap rounded-lg border border-solid border-neutral-900 min-w-[240px] text-neutral-900 w-[357px] max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/971c541026cb956c6d84be609c473d5cf4b6dc2c36690cdf7672a68df218adc7?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                  <div className="self-stretch my-auto">Wishlist</div>
                </div>
              </div>
              <div className="gap-2 self-stretch px-10 py-2.5 mt-4 w-full text-lg font-medium tracking-tight leading-8 text-center text-white rounded-lg bg-neutral-900 max-md:px-5">
                Add to Cart
              </div>
            </div>
            <div className="flex flex-col items-start py-4 w-full text-xs leading-loose max-w-[508px] max-md:max-w-full">
              
              <div className="flex gap-10 items-start mt-2">
                <div className="text-zinc-500">CATEGORY</div>
                <div className="text-neutral-900">{product && product.category}</div>
              </div>
            </div>
            <div className="flex flex-col py-2 w-full max-md:max-w-full">
              <div className="flex flex-col pb-2 w-full text-lg font-medium tracking-tight leading-8 border-b border-solid border-b-zinc-500 text-neutral-900 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
                  <div>Additional Info</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/76b116e1a6fe42edb0596fbfc2f134333f2253ad952f5d28d693a14f46c1f891?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
                    className="object-contain shrink-0 my-auto w-6 aspect-square"
                  />
                </div>
              </div>
              <div className="flex flex-col py-2 w-full max-md:max-w-full">
                <div className="flex flex-col w-full max-md:max-w-full">
                  <div className="text-sm font-semibold leading-loose text-zinc-500">
                    Details
                  </div>
                  <div className="mt-2 text-xs leading-5 text-neutral-900 max-md:max-w-full">
                    You can use the removable tray for serving. The design makes
                    it easy to put the tray back after use since you place it
                    directly on the table frame without having to fit it into
                    any holes.
                  </div>
                </div>
                <div className="flex flex-col mt-4 w-full max-md:max-w-full">
                  <div className="text-sm font-semibold leading-loose text-zinc-500">
                    Packaging
                  </div>
                  <div className="mt-2 text-xs leading-5 text-neutral-900 max-md:max-w-full">
                    Width: 20 &quot; Height: 1 ½ &quot; Length: 21 ½ &quot;
                    <br />
                    Weight: 7 lb 8 oz
                    <br />
                    Package(s): 1
                  </div>
                </div>
              </div>
              <div className="flex flex-col pb-2 w-full text-lg font-medium tracking-tight leading-8 whitespace-nowrap border-b border-solid border-b-zinc-500 text-neutral-900 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
                  <div>Questions</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/76b116e1a6fe42edb0596fbfc2f134333f2253ad952f5d28d693a14f46c1f891?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
                    className="object-contain shrink-0 my-auto w-6 aspect-square"
                  />
                </div>
              </div>
              <div className="flex flex-col pb-2 w-full text-lg font-medium tracking-tight leading-8 border-b border-solid border-b-zinc-500 text-neutral-900 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
                  <div>Reviews (11)</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/76b116e1a6fe42edb0596fbfc2f134333f2253ad952f5d28d693a14f46c1f891?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
                    className="object-contain shrink-0 my-auto w-6 aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start pt-10 pb-20 pl-40 w-full bg-white max-md:pl-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-end max-w-full font-medium w-[1120px]">
          <div className="text-3xl tracking-tight leading-none text-black">
            You might also like
          </div>
          <div className="flex gap-1 items-center text-base tracking-tight leading-7 border-b border-solid border-b-neutral-900 text-neutral-900">
            <div className="gap-1 self-stretch my-auto">More Products</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8677ed9fa03f8e2032f4306bdc75d23998bd9976c8a2e858d7b3935a74439f22?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
          </div>
        </div>
        <div className="flex gap-6 items-start mt-12 max-w-full w-[1280px] max-md:mt-10">
          <div className="flex flex-col min-w-[240px] w-[262px]">
            <div className="flex relative flex-col gap-5 justify-between items-start px-4 pt-4 pb-72 w-full aspect-[0.751] max-md:pb-24">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2b854ef52b77adb5889a79f32f474a8bf34925543111db6e33ebf77b3f30e106?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b854ef52b77adb5889a79f32f474a8bf34925543111db6e33ebf77b3f30e106?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b854ef52b77adb5889a79f32f474a8bf34925543111db6e33ebf77b3f30e106?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b854ef52b77adb5889a79f32f474a8bf34925543111db6e33ebf77b3f30e106?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b854ef52b77adb5889a79f32f474a8bf34925543111db6e33ebf77b3f30e106?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b854ef52b77adb5889a79f32f474a8bf34925543111db6e33ebf77b3f30e106?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b854ef52b77adb5889a79f32f474a8bf34925543111db6e33ebf77b3f30e106?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b854ef52b77adb5889a79f32f474a8bf34925543111db6e33ebf77b3f30e106?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
                className="object-cover absolute inset-0 size-full"
              />
              <div className="flex relative flex-col text-base font-bold leading-none text-center uppercase whitespace-nowrap">
                <div className="gap-2 self-stretch px-3.5 py-1 bg-white rounded text-neutral-900">
                  NEW
                </div>
                <div className="gap-2 self-stretch px-3.5 py-1 mt-2 text-white bg-emerald-400 rounded">
                  -50%
                </div>
              </div>
              <div className="flex relative gap-2.5 justify-center items-center px-1.5 w-8 h-8 bg-white shadow-lg min-h-[32px] rounded-[32px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9d2439d6531fab887282ed0122b9727099ca46115170c9bed7deb15109307a2?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
                  className="object-contain flex-1 shrink w-5 aspect-square basis-0"
                />
              </div>
            </div>
            <div className="flex flex-col mt-3 min-h-[72px]">
              <div className="flex flex-col w-full">
                <div className="flex flex-col items-start w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
                    className="object-contain aspect-[5.49] w-[88px]"
                  />
                  <div className="self-stretch mt-1 text-base font-semibold leading-loose text-neutral-900">
                    Loveseat Sofa
                  </div>
                  <div className="flex gap-3 items-start mt-1 text-sm leading-loose whitespace-nowrap">
                    <div className="font-semibold text-neutral-900">
                      $199.00
                    </div>
                    <div className="text-zinc-500">$400.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-semibold min-w-[240px] text-neutral-900 w-[262px]">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a69d3291bb559a7a5b77dfb59785fce461216883624f237a93fe2f4f4f2cc153?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a69d3291bb559a7a5b77dfb59785fce461216883624f237a93fe2f4f4f2cc153?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a69d3291bb559a7a5b77dfb59785fce461216883624f237a93fe2f4f4f2cc153?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a69d3291bb559a7a5b77dfb59785fce461216883624f237a93fe2f4f4f2cc153?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a69d3291bb559a7a5b77dfb59785fce461216883624f237a93fe2f4f4f2cc153?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a69d3291bb559a7a5b77dfb59785fce461216883624f237a93fe2f4f4f2cc153?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a69d3291bb559a7a5b77dfb59785fce461216883624f237a93fe2f4f4f2cc153?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a69d3291bb559a7a5b77dfb59785fce461216883624f237a93fe2f4f4f2cc153?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
              className="object-contain w-full aspect-[0.75]"
            />
            <div className="flex flex-col mt-3">
              <div className="flex flex-col items-start w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
                  className="object-contain aspect-[5.49] w-[88px]"
                />
                <div className="self-stretch mt-1 text-base leading-loose">
                  Table Lamp
                </div>
                <div className="gap-3 mt-1 text-sm leading-loose whitespace-nowrap">
                  $24.99
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-semibold min-w-[240px] text-neutral-900 w-[262px]">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/05fb62e8796d69723f1215b894e33e1b8622143a89ff4574dc26878f2eac66a4?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/05fb62e8796d69723f1215b894e33e1b8622143a89ff4574dc26878f2eac66a4?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/05fb62e8796d69723f1215b894e33e1b8622143a89ff4574dc26878f2eac66a4?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/05fb62e8796d69723f1215b894e33e1b8622143a89ff4574dc26878f2eac66a4?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/05fb62e8796d69723f1215b894e33e1b8622143a89ff4574dc26878f2eac66a4?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/05fb62e8796d69723f1215b894e33e1b8622143a89ff4574dc26878f2eac66a4?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/05fb62e8796d69723f1215b894e33e1b8622143a89ff4574dc26878f2eac66a4?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/05fb62e8796d69723f1215b894e33e1b8622143a89ff4574dc26878f2eac66a4?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
              className="object-contain w-full aspect-[0.75]"
            />
            <div className="flex flex-col mt-3">
              <div className="flex flex-col items-start w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
                  className="object-contain aspect-[5.49] w-[88px]"
                />
                <div className="self-stretch mt-1 text-base leading-loose">
                  Beige Table Lamp
                </div>
                <div className="gap-3 mt-1 text-sm leading-loose whitespace-nowrap">
                  $24.99
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-semibold min-w-[240px] text-neutral-900 w-[262px]">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/159e35defbff97a2050c2273a6c681fca7d91fa47c2709dc0261c28fb3164a83?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/159e35defbff97a2050c2273a6c681fca7d91fa47c2709dc0261c28fb3164a83?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/159e35defbff97a2050c2273a6c681fca7d91fa47c2709dc0261c28fb3164a83?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/159e35defbff97a2050c2273a6c681fca7d91fa47c2709dc0261c28fb3164a83?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/159e35defbff97a2050c2273a6c681fca7d91fa47c2709dc0261c28fb3164a83?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/159e35defbff97a2050c2273a6c681fca7d91fa47c2709dc0261c28fb3164a83?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/159e35defbff97a2050c2273a6c681fca7d91fa47c2709dc0261c28fb3164a83?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/159e35defbff97a2050c2273a6c681fca7d91fa47c2709dc0261c28fb3164a83?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
              className="object-contain w-full aspect-[0.75]"
            />
            <div className="flex flex-col mt-3">
              <div className="flex flex-col items-start w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
                  className="object-contain aspect-[5.49] w-[88px]"
                />
                <div className="self-stretch mt-1 text-base leading-loose">
                  Bamboo basket
                </div>
                <div className="gap-3 mt-1 text-sm leading-loose whitespace-nowrap">
                  $24.99
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-semibold whitespace-nowrap min-w-[240px] text-neutral-900 w-[262px]">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/66b3a55872f039d70b36164e0fa554389cdda566f0dc91347a6838c90996bbd1?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/66b3a55872f039d70b36164e0fa554389cdda566f0dc91347a6838c90996bbd1?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66b3a55872f039d70b36164e0fa554389cdda566f0dc91347a6838c90996bbd1?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/66b3a55872f039d70b36164e0fa554389cdda566f0dc91347a6838c90996bbd1?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/66b3a55872f039d70b36164e0fa554389cdda566f0dc91347a6838c90996bbd1?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66b3a55872f039d70b36164e0fa554389cdda566f0dc91347a6838c90996bbd1?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/66b3a55872f039d70b36164e0fa554389cdda566f0dc91347a6838c90996bbd1?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/66b3a55872f039d70b36164e0fa554389cdda566f0dc91347a6838c90996bbd1?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
              className="object-contain max-w-full aspect-[0.39] w-[136px]"
            />
            <div className="flex flex-col mt-3">
              <div className="flex flex-col items-start w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
                  className="object-contain aspect-[5.49] w-[88px]"
                />
                <div className="self-stretch mt-1 text-base leading-loose">
                  Toasted
                </div>
                <div className="gap-3 mt-1 text-sm leading-loose">$224.99</div>
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col font-semibold min-w-[240px] text-neutral-900 w-[262px]">
            <div className="flex flex-col w-full">
              <div className="flex flex-col w-full">
                <div className="flex flex-col w-full">
                  <div className="text-base leading-loose">Bamboo basket</div>
                  <div className="gap-3 self-start mt-1 text-sm leading-loose whitespace-nowrap">
                    $24.99
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-12 max-w-full w-[1120px] max-md:mt-10">
          <div className="flex flex-col items-start bg-gray-200 rounded-[80px] max-md:pr-5 max-md:max-w-full">
            <div className="flex shrink-0 max-w-full h-1 bg-neutral-700 rounded-[80px] w-[834px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex relative flex-col justify-center items-center px-20 py-24 w-full min-h-[360px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1debcab8898a7624451f6ffe382ea1809fce4de63d147057d451b1f1f26b4683?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1debcab8898a7624451f6ffe382ea1809fce4de63d147057d451b1f1f26b4683?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1debcab8898a7624451f6ffe382ea1809fce4de63d147057d451b1f1f26b4683?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1debcab8898a7624451f6ffe382ea1809fce4de63d147057d451b1f1f26b4683?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1debcab8898a7624451f6ffe382ea1809fce4de63d147057d451b1f1f26b4683?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1debcab8898a7624451f6ffe382ea1809fce4de63d147057d451b1f1f26b4683?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1debcab8898a7624451f6ffe382ea1809fce4de63d147057d451b1f1f26b4683?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1debcab8898a7624451f6ffe382ea1809fce4de63d147057d451b1f1f26b4683?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col justify-center items-center max-w-full w-[540px]">
            <div className="flex flex-col items-center w-full text-center text-neutral-900">
              <div className="text-4xl font-medium tracking-tight leading-none max-md:max-w-full">
                Join Our Newsletter
              </div>
              <div className="mt-2 text-lg leading-loose max-md:max-w-full">
                Sign up for deals, new products and promotions
              </div>
            </div>
            <div className="flex flex-col justify-center mt-8 max-w-full text-base font-medium tracking-tight leading-7 min-h-[52px] text-zinc-500 w-[488px]">
              <div className="flex flex-wrap gap-2 items-center w-full border-b border-solid border-b-zinc-500 border-b-opacity-50 min-h-[52px] max-md:max-w-full">
                <div className="flex flex-1 shrink gap-2 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ef8eea6e1551d55b618ee9730b6d9742968928d908acd6f920ebfc6a8a333b4?placeholderIfAbsent=true&apiKey=a56c72d961194001a727fb61f8f2af24"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                  <div className="flex-1 shrink self-stretch my-auto basis-0">
                    Email address
                  </div>
                </div>
                <div className="flex gap-0.5 items-center self-stretch my-auto whitespace-nowrap border-0 border-solid border-neutral-900">
                  <div className="gap-1 self-stretch my-auto">Signup</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
